import express from "express";

const App = express();
const PORT = 6969;

App.get("/", (req, res) => {
  res.json({ msg: "Hello World node" });
});

// R- Reading GET method
App.get("/movies", () => {});

//C - Create Movie POST ,m
App.post("/movies", () => {});

//U - Updating a Movie PUT method
App.put("/movies/:id", () => {});

//D - Delete a Movie DELETE method
App.delete("/movies/:id", () => {});

App.listen(PORT, () => {
  console.log(`The port running is at http://localhost:${PORT}`);
});
