import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    const docRef = db.collection("test_collection").doc("test_doc");
    await docRef.set({
      message: "Firestore is working!",
      timestamp: new Date().toISOString(),
    });

    const snapshot = await docRef.get();
    const data = snapshot.data();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Firestore test error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
