


function character(characterName, health, attackPower, counterAttackPower) {
	this.name = characterName;
	this.health = health;
	this.attackPower = attackPower
	this.counterAttackPower = counterAttackPower;
	/*this.pickAttacker = function() {
		if (something true) {

		} else {
			// something
		}
	};*/
}

var obiWan = new character('Obi-Wan Kenobi', 120 , 6, 15.5);
var luke = new character('Luke Skywalker' , 100, 6, 37.5);
var sidious = new character('Darth Sidious', 150, 6, 10);
var maul = new character('Darth Maul', 180, 6, 10);
var hero = 0;
var villan = 0;

var o = obiWan;
var l = luke;
var s = sidious;
var m = maul;



// should I embedd each function in the character object
var attack = function(hero, villan) {


}

var pickAttacker = function(playerInput) {

	if (playerInput === 'o') {
		console.log(obiWan.name);
		hero++;
	} 
	else if (playerInput === 'l') {
		console.log(luke.name);
		hero++;
	} else {
		console.log ('Please choose');
	}
}

var opponentChoice = function(opponentChoice) {

	if (opponentChoice === 's') {
		console.log(sidious.name);
		villan++;
	}
	else if (opponentChoice === 'm') {
		console.log(maul.name);
		villan++;
	} else {
		console.log('choose opponent');
	}
}
// choose a player
// simulate mouse click

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '79') {
		console.log('you chose Obi-Wan');
	}

	else if (e.keyCode == '76') {
		console.log('you chose luke');
	}

	else if (e.keyCode == '83') {
		console.log('you chose sidious');
	} 
	 else if (e.keyCode == '77') {
	 	console.log('you chose maul');
	}

	else if (e.keyCode == '65') {
		console.log('you chose to attack');
	} else {
		console.log('please choose correct letter');
	}
}

console.log('choose your character');

document.onkeydown = checkKey; {

checkKey();


}



// var playerInput = String.fromCharCode(event.keyCode).toLowerCase();
	// console.log(event.which);

// chooses players
// when changing to clicks remove the if and point to one function
/*if (playerInput === 'o'||playerInput === 'l'||playerInput === 's'||playerInput === 'm') {
	
	if (hero === 0) {
		pickAttacker(playerInput);
		console.log('choose first opponent');
	}

	else if (villan === 0) {
		opponentChoice(playerInput);
	} 
	else if (villan === 1) {
		console.log('choose second opponent');
		console.log('choices remaining health is > 0');
		// choose another villan only show above 0 health
	}
	else if (villan === 2) {
		console.log('choose final opponent');
		// same as above
	}
	else {
		console.log('help');
		// final villan
	}
} else if (playerInput === 'a') {
		console.log('attack');
	} else {
		console.log('please choose correct letter');
	}*/



