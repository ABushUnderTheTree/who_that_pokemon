import express from 'express';
const app = express();
const apiUrl = "https://pokeapi.co/"

const requestOptions = {
  method: "GET",
  
};


const response = await fetch(apiUrl + "/api/v2/pokemon/", requestOptions);
console.log(await response.json());



app.get("/new/:game_id", (req, res) => {
  const gameId = Number(req.params.game_id);

  res.json({
    gameId
  });
});



/*

const response = await fetch(apiUrl + "/api/v2/", requestOptions);
console.log(await response.json());

app.get("/", (req, res) => {
  res.send( 
    '<h1 style="background-color: yellow;">Save the Squirrels</h1>'
    
    );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

*/