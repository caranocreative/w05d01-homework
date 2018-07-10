const express = require('express');
const app = express();

// require our model - model should be capitalized
const Fruits = require('./models/fruits');

// trying to do 
// localhost:3000/fruits/0 --> apple


//creating the index route
// index route should show all the fruits
app.get('/fruits', (req, res) => {
	res.send(Fruits)
});

// we are going to use query params
// to act like a variable which, can be
//sent over by the client

//this is routing - express routing

// this is our SHOW
app.get('/fruits/:index', (req, res) => {
	res.render('show.ejs', {
		fruit: Fruits[req.params.index] // this
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