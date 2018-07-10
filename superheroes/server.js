const express = require("express");
const app = express();

//const superheroes = ["batman", "superman", "hulk"];
const superheroes = [
	{name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']},
	{name: "batman", powers: ['manOfSteel', 'somethingElse', 'notSure']},
	{name: "hulk", powers: ['strong', 'green', 'muscles']},
];


app.get("/superheroes/:index", (req, res) => {
	res.send(superheroes[req.params.index])
});


app.listen(3000, () => {
	console.log("Here to save the day...")
})