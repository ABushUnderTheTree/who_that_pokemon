import express from 'express';
const app = express();
const newGame = await fetch('https://pokeapi.co/api/v2/pokemon/');
const data = await newGame.json();


const requestOptions = {
  method: "POST",
  
};



const response = await fetch(newGame, requestOptions);
console.log(await response.json());



app.get("/new/:game_id", (req, res) => {
  const gameId = Number(req.params.game_id);
const randomGameId = Math.floor(Math.random() * 10000) + 1;
  res.json({
    gameId
  });
});
