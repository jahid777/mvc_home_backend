const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./Model/ProductModel");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

//product adding
app.post("/addProduct", (req, res) => {
  try {
    const product = Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messege: error.messege });
  }
});

//product get
app.get("/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messege: error.messege });
  }
});

//get product by id
app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the product with id
app.put("/updateProduct/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      console.log("Node API app is running on port 8000");
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
// kono karone conneciton na koraite parle password ar name a conflict kahise kina dhakbo..ar password a @##$ aysob avoid korbo

// https://github.com/devtamin/Node-API/blob/master/server.js
