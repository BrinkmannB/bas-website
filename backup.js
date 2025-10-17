// backup.js — automatische Netlify → Google Cloud backup

import fs from "fs";
import path from "path";
import { Storage } from "@google-cloud/storage";
import archiver from "archiver";

const bucketName = process.env.GCP_BUCKET_NAME;
const projectId = process.env.GCP_PROJECT_ID;
const keyFile = JSON.parse(process.env.GCP_SERVICE_ACCOUNT_KEY);

// Tijdelijke zip maken van de public map
const output = fs.createWriteStream("site-backup.zip");
const archive = archiver("zip", { zlib: { level: 9 } });
archive.pipe(output);
archive.directory("public/", false);
await archive.finalize();

// Verbinding met Google Cloud
const storage = new Storage({
  projectId,
  credentials: {
    client_email: keyFile.client_email,
    private_key: keyFile.private_key,
  },
});

// Upload zip naar bucket
await storage.bucket(bucketName).upload("site-backup.zip", {
  destination: `backups/site-backup-${new Date().toISOString()}.zip`,
  gzip: true,
});

console.log("✅ Websitebackup geüpload naar Google Cloud Storage");
