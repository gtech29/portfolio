// src/lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

function decodePrivateKey(encoded: string): string {
  return Buffer.from(encoded, "base64").toString("utf-8");
}

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (!privateKey || !clientEmail || !projectId) {
    throw new Error("Missing Firebase credentials in environment variables.");
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: decodePrivateKey(privateKey),
    }),
  });
}

export const db = admin.firestore();
