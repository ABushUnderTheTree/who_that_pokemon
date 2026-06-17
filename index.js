import express from "express";
const app = express();
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const Port = 3000

const requestOptions = {
  method: "GET",
  
};


// const response = await (req, res);
// console.log(await response.json());


app.get("/", (req,res) => {
  res.send("Hello");
});

const getApi = async() =>{
  const url = await fetch(apiUrl);
}

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