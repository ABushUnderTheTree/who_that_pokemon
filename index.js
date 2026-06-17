import express from "express";
const app = express();
//the api is in this variable please do not touch
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
//This port variable holds our server please do not touch
const Port = 3000


//this is test to see if connecting to the server
app.get("/", (req,res) => {
  res.send("Hello");
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

getApi();
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
app.listen(Port, () => {
  console.log("Server is running on port 3000");
});