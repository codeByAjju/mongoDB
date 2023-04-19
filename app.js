import express from "express";
import bodyParser from "body-parser";
import userRouter from "./router/user.route.js";
import mongoose from "./db/mongo.js";
import cartRouter from "./router/cart.route.js";
import ProductRouter from "./router/product.route.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/user",userRouter);
app.use("/cart",cartRouter);
app.use("/product",ProductRouter);
app.listen(3000,()=>{
    console.log("Server Started...");
})