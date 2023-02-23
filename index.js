const express = require("express");
const app = express();
const port = 3000;
const User = require("./Database/Userschema");
const Product = require("./Database/Productschema");
const cors =require("cors");
require("./Database/Connection");

app.use(express.json());
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.send("this is home route");
});

//signup route
app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const usersave = await user.save();
    res.send(usersave);
  } catch (error) {
    console.log(error);
  }
});

//login route

app.post("/login", async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

// add product

app.post("/addproduct", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productsave = await product.save();
    res.send(productsave);
  } catch (error) {
    console.log(error);
  }
});

//get all product
app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

// get single product detail

app.get("/product/:id", async (req, res) => {
  try {
    const productdetail = await Product.findById({ _id: req.params.id });
    res.send(productdetail);
  } catch (error) {
    console.log(error);
  }
});

// update product detail
app.put("/product/:id",async(req,res)=>{
    try {
       const update =await Product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}) 
       res.send(update);
    } catch (error) {
        console.log(error);
    }
})

// delete product

app.delete("/product/:id",async(req,res)=>{
    try {
        const deletedata =await Product.findByIdAndDelete({_id:req.params.id})
        res.send(deletedata)
    } catch (error) {
        console.log(error);
    }
})



app.listen(port, () => {
  console.log(`server runing on ${port}`);
});
