import express from "express";
const app = express();
//the api is in this variable please do not touch
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
//This port variable holds our server please do not touch
const Port = 3000

app.get("/", (req, res) => {
  res.send("Who's That Pokémon?");
});

// Get a random Pokémon
app.get("/pokemon", async (req, res) => {
  try {
    // Generate a random Pokémon ID
    const randomPokemonId = Math.floor(Math.random() * 151) + 1;

    // Fetch Pokémon data
    const response = await fetch(`${apiUrl}${randomPokemonId}`);
    const pokemon = await response.json();

    // Send only the data we need
    res.json({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch Pokémon data",
    });
  }
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});







// Your ID generator function
// const game_id = (length) => {
//     let result = ' ';
//     const game_id_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const game_id_charactersLength = game_id_characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += game_id_characters.charAt(Math.floor(Math.random() * game_id_charactersLength));
//     }
//     return result;
// }

//this is test to see if connecting to the server
// app.get("/", async (req,res) => {
//   try {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   res.send(data);
  
//   } catch (error) {
//     res.status(500).send({ error: 'Failed to fetch data' });
//   }
// });

//This function has the variables awaiting
//url holds the apiUrl variable and the params 

// Send the string back to the browser
// app.get("/new", async (req, res) => { 
//   const newGameId = game_id(8); 
//     res.send(`Your new Game ID is: ${newGameId}`); 
// });



// app.get("/new/:game_id", (req, res) => {
//   const gameId = Number(req.params.game_id);

//   res.json({
//     gameId
//   });
// });



/*

const response = await fetch(apiUrl + "/api/v2/", requestOptions);
console.log(await response.json());

app.get("/", (req, res) => {
  res.send( 
    '<h1 style="background-color: yellow;">Save the Squirrels</h1>'
    
    );
});


*/
