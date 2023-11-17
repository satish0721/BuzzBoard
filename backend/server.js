import http from "http";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import orderRouter from "./routers/orderRouter.js";
dotenv.config();

var corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("<h1>Server is ready</h1>");
});

const port = process.env.PORT || 3000;

const httpServer = http.Server(app);

httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
