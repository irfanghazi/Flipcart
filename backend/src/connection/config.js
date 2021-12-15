const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://irfan:ghazi@cluster0.lfgxq.mongodb.net/flipkartDB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB connected successfully connected");
  }).catch((err)=>{
      console.log(err)
  });