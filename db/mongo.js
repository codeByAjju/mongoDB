import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1/productdb")
.then(result=>{
    console.log("Database Conncted....");
})
.catch(err=>{
    console.log(err);
});
export default mongoose.connection;
