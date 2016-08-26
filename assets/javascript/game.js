


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
var fightSequenceArray = [];

// this function is in the checkKey functon
function figthSequence() {

	var randomNum = Math.floor((Math.random() * 5)+1);
	var attack = fightSequenceArray[1].health - (fightSequenceArray[0].attackPower * randomNum);
	fightSequenceArray[1].health = attack;

	if (fightSequenceArray[0].health <= 0) {
		console.log('You Lost');
		return;
	}
	else if (fightSequenceArray[1].health <= 0) {
		fightSequenceArray.splice(1, 1);
		console.log('choose next opponent');
		return;

	} else {
	
	var randomNum2 = Math.floor((Math.random() * 5) +1);
	var counterAttack = fightSequenceArray[0].health - (fightSequenceArray[1].attackPower * randomNum2);
	fightSequenceArray[0].health = counterAttack;

	console.log(randomNum);
	console.log(attack);
	console.log(fightSequenceArray[1].health);
	console.log(fightSequenceArray[0].health);
	}
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
		figthSequence();
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

checkKey();

// displayFightSequenceArray();

// choiceSequence();

}



