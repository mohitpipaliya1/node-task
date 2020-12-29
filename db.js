const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/DemoTask",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected succesfully");
  }
);
