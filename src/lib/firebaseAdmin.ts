// src/lib/firebaseAdmin.ts
import * as admin from "firebase-admin";

/**
 * Decode the private key provided via environment variable.
 *
 * The value may be supplied either as a raw PEM string (with literal
 * newlines or escaped \n sequences) or as a base64 encoded version of the
 * PEM file.  This helper attempts to handle both cases gracefully so that
 * deployments can configure the variable in whichever format is most
 * convenient.
 */
function decodePrivateKey(encoded: string): string {
  // If the string already contains the BEGIN marker we assume it is the raw
  // key possibly with escaped newlines.
  if (encoded.includes("BEGIN PRIVATE KEY")) {
    return encoded.replace(/\\n/g, "\n");
  }

  // Otherwise attempt to treat it as base64 encoded data.
  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  return decoded.replace(/\\n/g, "\n");
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
