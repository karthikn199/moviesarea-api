import express from "express";
import {
  movieCrete,
  movieDelete,
  movieDetails,
  movieIndex,
  movieUpdate,
} from "../controllers/movie.controller.js";

const route = express.Router();

//F9MeVxjAX4JucvxT

// mongodb+srv://karthiknstr:<db_password>@cluster0.v8ifi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// R- Reading GET method
route.get("/", movieIndex);

route.get("/:id", movieDetails);

//C - Create Movie POST ,m
route.post("/", movieCrete);

//U - Updating a Movie PUT method
route.put("/:id", movieUpdate);

//D - Delete a Movie DELETE method
route.delete("/:id", movieDelete);

export default route;
