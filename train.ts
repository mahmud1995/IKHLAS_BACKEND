console.log("train test");
async function readAllFuncs(): Promise<string[]> {
  console.log("🚀 Starting all tasks...");

  try {
    const results = await Promise.all([walkDog(), cleanKitchen()]);
    console.log("✅ All mission is completed!");
    console.log("📋 Results:", results);
    return results;
  } catch (error) {
    console.log("❌ Error:", error);
    throw error;
  }
}

// Function - 1
function walkDog(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🐕 Dog walk completed!");
      resolve("You walked the dog");
    }, 2000);
  });
}
// Function - 2
function cleanKitchen(): Promise<string> {
  console.log("🧽 Starting to clean kitchen...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🧽 Kitchen cleaning completed!");
      resolve("You cleaned the Kitchen");
    }, 3000);
  });
}
