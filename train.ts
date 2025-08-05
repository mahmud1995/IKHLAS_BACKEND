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

// Function - 3
function startRobot(): Promise<string> {
  console.log("🤖 Starting robot...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("🤖 Robot started!");
      resolve("You started the Robot");
    }, 500);
  });
}

// Function - 4
function throwTrash(): Promise<string> {
  return new Promise((resolve) => {
    const youCan = true;
    setTimeout(() => {
      if (youCan) {
        console.log("You can throw the trash");
        resolve("Succesfully threw out the trash");
      } else {
        console.log("It is not right time to throw out the Trash");
      }
    }, 500);
  });
}
