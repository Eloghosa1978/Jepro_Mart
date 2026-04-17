/**
 * ADMIN SEEDING SCRIPT
 *
 * Run this in the browser console or as part of your dev setup to seed Firestore
 * Usage:
 * 1. Import this file in your main.jsx or App.jsx temporarily
 * 2. Call seedProducts() in the browser console
 * 3. Check Firestore console to verify data
 */

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import products from "../data/main-products.js";

export const seedProducts = async () => {
  try {
    const db = firebase.firestore();
    const batch = db.batch();
    const collectionRef = db.collection("products");

    console.log("🚀 Starting product upload...");
    console.log(`📦 Total products to upload: ${products.length}`);
    // Add each product to Firestore with a unique ID
    products.forEach((product) => {
      const docRef = collectionRef.doc(); // Generate unique ID
      batch.set(docRef, {
        ...product,
        createdAt: new Date(),
        id: docRef.id, // Store the doc ID in the product
      });
    });

    // Commit the batch
    await batch.commit();

    console.log(
      `✅ Successfully uploaded ${products.length} products to Firestore!`,
    );
    return {
      success: true,
      message: `${products.length} products uploaded successfully`,
      count: products.length,
    };
  } catch (error) {
    console.error("❌ Error uploading products:", error);
    throw new Error(`Failed to seed products: ${error.message}`);
  }
};

export const clearProducts = async () => {
  try {
    const db = firebase.firestore();
    const collectionRef = db.collection("products");

    console.log("🗑️ Clearing all products from Firestore...");

    const snapshot = await collectionRef.get();
    const batch = db.batch();

    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    console.log("✅ Successfully cleared all products!");
    return { success: true, message: "All products cleared" };
  } catch (error) {
    console.error("❌ Error clearing products:", error);
    throw new Error(`Failed to clear products: ${error.message}`);
  }
};

export const getProductCount = async () => {
  try {
    const db = firebase.firestore();
    const snapshot = await db.collection("products").get();
    console.log(`📊 Total products in Firestore: ${snapshot.size}`);
    return snapshot.size;
  } catch (error) {
    console.error("❌ Error getting product count:", error);
    throw error;
  }
};
