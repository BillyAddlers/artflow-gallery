import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router";
import * as cors from "cors";

dotenv.config();

const app: Express = express();
app.use(cors.default())
const port = process.env.PORT || 6969;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use("/api", router)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});