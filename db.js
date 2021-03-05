const mongoose = require("mongoose");



mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected succesfully");
  }
);
