import express, { Request, Response } from "express";
import connectDb from "./DB/dbConfig";
import talentRoutes from "./routes/talentRoutes";

const app = express();
app.use("/", talentRoutes);
const port = 3000;

app.use(express.json());

connectDb().then(() => {
  app.listen(port, () => {
    console.log("server is running and DB connected successfuly");
  });
});
