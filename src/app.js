import express from "express";
import morgan from "morgan";
import cors from "cors";
import IndexRoutes from "./routes/index.routes";

const app = express();

// Setings
app.set("port", process.env.PORT || 3000);

// Middlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.json({ messge: "Welcome to my application" });
});

app.use("/api", IndexRoutes);

export default app;
