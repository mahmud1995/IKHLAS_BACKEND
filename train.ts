console.log("train test");
async function readAllFuncs(): Promise<string> {
    console.log("🚀 Starting all tasks...");

    try {
        // const results = Promise.all()
    }
}

// Function - 1
function walkDog(): Promise<string> {
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log("🐕 Dog walk completed!");
            resolve("You walked the dog")
        }, 2000)
    })
}