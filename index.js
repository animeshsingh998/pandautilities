import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import utilsRoutes from './routes/utilsRoute.js';

dotenv.config();

let corsOptions = {
  origin: ["https://animeshwebdev.vercel.app/", 'http://localhost:3000/'],
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use('/utils', utilsRoutes)

app.get('/', (req, res) => {
    return res.json({message: "Welcome to Panda Utilities Api."})
})

app.listen(process.env.PORT, () => {
  console.log(`server runnning at PORT ${process.env.PORT}`);
});
