// === backup.js ===
// Automatische back-up van de /public map naar Google Cloud Storage
// Compatibel met Netlify en CommonJS (Node 18)

const { Storage } = require("@google-cloud/storage");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

// === Configuratie uit Netlify Environment Variables ===
const bucketName = process.env.GCP_BUCKET_NAME;
const projectId = process.env.GCP_PROJECT_ID;
const serviceAccountKey = process.env.GCP_SERVICE_ACCOUNT_KEY;

// === Controlestap ===
if (!bucketName || !projectId || !serviceAccountKey) {
  console.error("❌ Ontbrekende environment variables. Controleer GCP_* instellingen in Netlify.");
  process.exit(1);
}

// === JSON-sleutel tijdelijk schrijven ===
const keyFilePath = path.join(__dirname, "gcp-key.json");
fs.writeFileSync(keyFilePath, serviceAccountKey);

// === Google Cloud Storage initialiseren ===
const storage = new Storage({
  projectId,
  keyFilename: keyFilePath,
});

// === Map en bestandsnamen ===
const sourceDir = path.join(__dirname, "public");
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const archiveName = `luisterendoor-backup-${timestamp}.zip`;
const archivePath = path.join(__dirname, archiveName);

// === ZIP maken ===
function createZip(source, out) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(out);
    const archive = archiver("zip", { zlib: { level: 9 } });

    output.on("close", () => resolve());
    archive.on("error", err => reject(err));

    archive.pipe(output);
    archive.directory(source, false);
    archive.finalize();
  });
}

// === Uploaden naar GCP ===
async function uploadToGCP() {
  try {
    console.log("📦 Start backup van:", sourceDir);
    await createZip(sourceDir, archivePath);
    console.log("✅ ZIP gemaakt:", archiveName);

    const bucket = storage.bucket(bucketName);
    await bucket.upload(archivePath, {
      destination: `backups/${archiveName}`,
      gzip: true,
    });

    console.log(`✅ Backup geüpload naar Google Cloud Storage: gs://${bucketName}/backups/${archiveName}`);
  } catch (err) {
    console.error("❌ Fout bij uploaden:", err);
    process.exit(1);
  } finally {
    // Opruimen
    if (fs.existsSync(archivePath)) fs.unlinkSync(archivePath);
    if (fs.existsSync(keyFilePath)) fs.unlinkSync(keyFilePath);
  }
}

// === Start het proces ===
uploadToGCP();
