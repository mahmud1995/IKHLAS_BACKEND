import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("\n- MongoDB Connection Successed!");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, function () {
      console.info(`- The server is running successfully on port: ${PORT}`);
      console.info(`- Admin project on http://localhost:${PORT}/admin`);
      console.info(`- User project on http://localhost:${PORT} \n`);
    });
  })
  .catch((err) => {
    console.log("Error Occured with MongodDB connection", err);
  });
