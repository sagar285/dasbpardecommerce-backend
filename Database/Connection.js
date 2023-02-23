const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://sagargupta:sahboardecommerce@cluster0.ysyswwj.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connection succesful");
}).catch((e)=>{
    console.log(e);
})