const app = require("./app");

const PORT = process.env.PORT || 8000;

//listening server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
