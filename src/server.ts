import app from "./app";

const PORT = process.env.PORT;
app.listen(PORT, function () {
  console.info(`The server is running successfully on port: ${PORT}`);
  console.info(`Super Admin project on http://localhost:${PORT}/superadmin \n`);
  //   console.info(`Admin project on http://localhost:${PORT}/admin \n`);
});
