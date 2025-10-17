/**
 * backup.js
 * Automatische Google Cloud backup voor Luisterend Oor
 * Gebruikt service account key uit Netlify environment variable
 */

import { Storage } from "@google-cloud/storage";
import fs from "fs";
import archiver from "archiver";
import path from "path";

// Variabelen uit Netlify (via Environment variables)
const bucketName = process.env.GCP_BUCKET_NAME;
const projectId = process.env.GCP_PROJECT_ID;
const key = process.env.GCP_SERVICE_ACCOUNT_KEY;

if (!bucketName || !projectId || !key) {
  console.error("❌ Fout: ontbrekende environment variabelen.");
  process.exit(1);
}

// JSON sleutel parsen
let credentials;
try {
  credentials = JSON.parse(key);
} catch (err) {
  console.error("❌ Ongeldige JSON in GCP_SERVICE_ACCOUNT_KEY:", err);
  process.exit(1);
}

// Initialiseer Google Cloud client
const storage = new Storage({
  projectId,
  credentials,
});

// Bestandsnamen
const backupDir = "public";
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const zipFileName = `luisterendoor-backup-${timestamp}.zip`;
const outputPath = path.join(process.cwd(), zipFileName);

// ZIP aanmaken
console.log("📦 Start backup van public/");
const output = fs.createWriteStream(outputPath);
const archive = archiver("zip", { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(backupDir, false);
await archive.finalize();

// Upload naar bucket
output.on("close", async () => {
  try {
    await storage.bucket(bucketName).upload(outputPath, {
      destination: `backups/${zipFileName}`,
    });
    console.log(`✅ Backup voltooid: ${zipFileName} geüpload naar ${bucketName}`);
    fs.unlinkSync(outputPath); // lokaal zip-bestand verwijderen
  } catch (err) {
    console.error("❌ Upload mislukt:", err);
    process.exit(1);
  }
});

