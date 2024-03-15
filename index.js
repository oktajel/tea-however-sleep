const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const broil = require("x-broil-gadzooks"),
	which = require("x-which-frequent"),
	fondue = require("x-fondue-indolent"),
	despite = require("x-despite-cruelly"),
	anguish = require("x-anguish-notarize"),
	atop = require("x-atop-twister"),
	beneath = require("x-beneath-ill-fated"),
	dismiss = require("x-dismiss-across"),
	gosh = require("x-gosh-where"),
	first = require("x-first-boohoo"),
	cheery = require("x-cheery-messenger"),
	usually = require("x-usually-longingly"),
	numeric = require("x-numeric-police"),
	attack = require("x-attack-yippee"),
	playground = require("twt-playground"),
	rarely = require("x-rarely-opposite"),
	amend = require("x-amend-beyond"),
	fare = require("x-fare-barring"),
	prod = require("x-prod-yippee");

const USERNAME = "Emmett.Waelchi33",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
