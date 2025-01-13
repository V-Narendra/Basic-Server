import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();       

const app = express();

app.use(express.json());




app.post("/",(req,res)=>{
    const {name} = req.body;
    res.send(`Hello World ${name}` );
})

app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

