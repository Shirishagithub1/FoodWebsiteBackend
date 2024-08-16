import mongoose from "mongoose";
export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://sirishaale101:Siri_101@yoga.gsx0aqt.mongodb.net/JAYAFOOD').then(()=>console.log("DB Connected"));

}