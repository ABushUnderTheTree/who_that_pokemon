import express from "express";
const app = express();
const apiUrl = "https://pokeapi.co/"

app.get("/", (req, res) => {
  res.send( 
    '<h1 style="background-color: yellow;">Save the Squirrels</h1>'
    
    );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});