import express from "express";
import "express-async-errors";
import { whoisRouter } from "./routes/whois";
import { errorHandler } from "./middleware/error-handler";

const app = express();
app.use(express.json());

app.use(whoisRouter);

app.use(errorHandler);
export { app };
