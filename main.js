import express from "express";
import connectDb from "./lib/db.js";
import movieRoutes from "./routes/movies-routes.js";

const App = express();
const PORT = 6969;

App.use(express.json());

// Middleware to parse URL-encoded data (useful for form submissions)
App.use(express.urlencoded({ extended: true }));

App.get("/", (req, res) => {
  res.json({ msg: "Hello World node !" });
});

//connect DB
connectDb();

App.use("/movies", movieRoutes);

App.listen(PORT, () => {
  console.log(`The port running is at http://localhost:${PORT}`);
});
