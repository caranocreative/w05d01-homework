
// Extend the app we've built in class so that the index route 
// uses EJS to render all the fruits into HTML
// Each fruit that is displayed should have a link to that fruit's show page
// Each fruit's show page should have a link back to the index page
// Next exit the fruit folder, and Clone this repo this starter code 
// (Make sure you are not in a git repo)and follow the directions in the 
// comments in server.js. This is the server code you have add the rest
				

const express = require('express');
const app = express();


const Fruits = require('./models/fruits');


//creating the index route
// index route should show all the fruits
app.get('/fruits', (req, res) => {
	res.render('index.ejs', {
		fruitsList:Fruits
	});
});


// this is our SHOW
app.get('/fruits/:index', (req, res) => {
	res.render('show.ejs', {
		fruitsList: Fruits[req.params.index] // this
		//creates a "fruit" variable in the show page
	});
//render is when you want to send an
// ejs template to the client



	// console.log(req.params, '<-- this is req.params');
	// res.send(Fruits[req.params.index]);
});


app.listen(3000, () => {
	console.log('I am listening on port 3000');
})