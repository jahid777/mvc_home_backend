const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./Model/ProductModel");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/addProduct", async (req, res) => {
  console.log(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Node API app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

//   USER_NAME=auth_user
// USER_PASSWORD=auth_pass123
// DB_NAME=authData
// DB_COLLECTION=authDataColletion
// MONGO_URL=`mongodb+srv://auth_user:auth_pass123@cluster0.q8cyezl.mongodb.net/?retryWrites=true&w=majority`
