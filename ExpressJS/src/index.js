import express from "express";
import cookieParser from "cookie-parser";
import allRoutes from "./routes/index.js";
import { loggingMiddleWare } from "./utils/middlewares.js";
const app = express();

app.use(express.json());
app.use(loggingMiddleWare);

app.use(cookieParser("practice"))
app.use(allRoutes);

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Server Ruuning on ${port}`);
});

app.get("/", (req, res) => {
  res.cookie("first","Hello Test",{maxAge:60000 * 60 * 24,signed:true})
  res.send("Hi This is ExpressJS Practice");
});
