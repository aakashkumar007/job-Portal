import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import jobRoute from './routes/jobRoute.js'
import testRoute from './routes/test.js'


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
});

const corsOption = {
    origin:'*',
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    optionSuccessStatus:200,
    credentials:true
};
app.use(cors(corsOption));

app.use(express.json());

app.use("/api/jobs",jobRoute);
app.use("/api/test",testRoute);


app.get("/",(req,res)=>{
    res.send("Welcome to Server");
})

app.listen(process.env.PORT,()=>{
    console.log("server is listining on port 4000");
})