import app from "./app";
import "./database";
import "dotenv";

app.listen(app.get("port"));
console.log("listening on port", app.get("port"));
