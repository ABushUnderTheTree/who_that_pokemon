import express from "express";
const app = express();
//the api is in this variable please do not touch
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
//This port variable holds our server please do not touch
const Port = 3000

// Your ID generator function
const game_id = (length) => {
    let result = ' ';
    const game_id_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const game_id_charactersLength = game_id_characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += game_id_characters.charAt(Math.floor(Math.random() * game_id_charactersLength));
    }
    return result;
}

//this is test to see if connecting to the server
app.get("/", async (req,res) => {
  try {
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.send(data);
  
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
});


//This function has the variables awaiting
//url holds the apiUrl variable and the params 
const getApi = async() =>{
  // Wait for the API request to return a response
  const url = await fetch(apiUrl);
  // Wait for the JSON response to be converted into JavaScript data
  const params = await url.json();
  // Display the API data
  console.log(params)
}

// Send the string back to the browser
app.get("/new", async (req, res) => { 
  const newGameId = game_id(8); 
    res.send(`Your new Game ID is: ${newGameId}`); 
});

getApi();

app.listen(Port, () => {
  console.log("Server is running on port 3000");
});


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
