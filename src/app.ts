import express from "express";
import "express-async-errors";
import { whoisRouter } from "./routes/whois";

const app = express();
app.use(express.json());

app.use(whoisRouter);

export { app };
