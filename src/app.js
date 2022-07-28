import express, { application } from "express";
import IndexRoutes from "./routes/index.routes";

const app = express();

// Setings
app.set("port", process.env.PORT || 3000);

app.use(express.json())

// Routes 
app.get("/", (req, res) => {
  res.json({ messge: "Welcome to my application" });
});

app.use("/api", IndexRoutes);

export default app;
