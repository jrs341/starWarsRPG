


function character(characterName, health, attackPower, counterAttackPower) {
	this.name = characterName;
	this.health = health;
	this.attackPower = attackPower
	this.counterAttackPower = counterAttackPower;
	/*this.attack = function() {
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

var fightSequenceArray = [];

// should I embedd each function in the character object
function attack() {
	var randomNum = Math.floor((Math.random() * 5)+1);
	// var heroHealthNew = 0;
	// var villanHealthNew =0;

	// var heroHealth = fightSequenceArray[0].health;
	// var villanHealth = fightSequenceArray[1].health;
	// var villan2Health = fightSequenceArray[2].health;
	// var villan3Health = fightSequenceArray[3].helath;

	// var heroAttackPower = fightSequenceArray[0].attackPower;
	// var villancounterAttackPower = fightSequenceArray[1].counterAttackPower;
	// var villan2counterAttackPower = fightSequenceArray[2].counterAttackPower;

	var test = fightSequenceArray[1].health - (fightSequenceArray[0].attackPower * randomNum);
	fightSequenceArray[1].health = test;
	// fightSequenceArray.splice(fightSequenceArray[1].helath, 1, test);
	/*if (heroHealth !== 0) {

	}*/

	console.log(randomNum);
	// console.log(fightSequenceArray[0].health);
	// console.log(fightSequenceArray[1].helath);
	console.log(test);
	console.log(fightSequenceArray[1].health);
}


// choose a player
// simulate mouse click

function checkKey(e) {

	e = e || window.event;

	if (e.keyCode == '79') {
		console.log('you chose Obi-Wan');
		fightSequenceArray.push(obiWan);
		return;

	}

	else if (e.keyCode == '76') {
		console.log('you chose luke');
		fightSequenceArray.push(luke);
		return;
	}

	else if (e.keyCode == '83') {
		console.log('you chose sidious');
		fightSequenceArray.push(sidious);
		return;
	} 
	 else if (e.keyCode == '77') {
	 	console.log('you chose maul');
	 	fightSequenceArray.push(maul);
	 	return;
	}

	else if (e.keyCode == '65') {
		console.log('you chose to attack');
		attack();
	} else {
		console.log('please choose correct letter');
	}
	return;
}

function displayFightSequenceArray() {
	for (i=0; i<fightSequenceArray.length; i++) {
	console.log(fightSequenceArray[i]);
}

}
function choiceSequence() {
	
	if (fightSequenceArray.length === 1){
	console.log('choose your first opponent');
	} 
	else if (fightSequenceArray.length === 2) {
	console.log('choose your second opponent');
	} 
	else if (fightSequenceArray.length === 3) {
	console.log('last opponent');
	} else {
		return;
	}
}


console.log('choose your character');

document.onkeydown = function(event) {

	// var e = String.fromCharCode(event.keyCode).toLowerCase();

checkKey();

displayFightSequenceArray();

// choiceSequence();



}
// console.log('choose your first opponent');

/*var pickAttacker = function(playerInput) {

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
}*/

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



