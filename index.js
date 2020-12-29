const express = require("express");

const app = express();
app.use(express.json());

require("./db");
const myRoute = require("./route/user");

app.use("/user", myRoute);

app.listen(2000, () => {
  console.log("....PORT LISTENING ON 2000....");
});
