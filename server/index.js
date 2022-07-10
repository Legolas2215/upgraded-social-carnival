import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import postRoutes from "./routes/post.js";
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);


const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
mongoose.connect(process.env.CONNECTION_URL,connectionParams)
  .then( () => {
      app.listen(PORT, hostname, () => {
        console.log(`Server running at http://${hostname}:${PORT}/`);
      })
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. n${err}`);
  })


