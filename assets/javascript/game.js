
function character(characterName, health, attackPower, counterAttackPower) {
	this.name = characterName;
	this.health = health;
	this.attackPower = attackPower
	this.counterAttackPower = counterAttackPower;
}

var obiWan = new character('Obi-Wan Kenobi', 120 , 6, 15.5);
var luke = new character('Luke Skywalker' , 100, 6, 37.5);
var sidious = new character('Darth Sidious', 150, 6, 10);
var maul = new character('Darth Maul', 180, 6, 10);

var characters = [];
characters.push(obiWan, luke, sidious, maul);

var fightSequenceArray = [];
var playerChoice = 0;

function displayCharacters () {

	for (var i = 0; i < characters.length; i++) {
	var b = $('<button>');
	b.addClass('characterList');
	b.attr(characters[i]); 
	b.text(characters[i].name);

	$('#buttons').append(b);
}

$('.characterList').one('click', function() {
	playerChoice = $('<div class = "playerChoice" >').text(this.name);
	$('#obi').append(playerChoice);
	fightSequenceArray.push(this);
	displayFightSequenceArray();
	$('#buttons').attr('id', 'buttonsNone');
	someFunction();	
})

}

function someFunction()	{

	for (var i = 0; i < characters.length; i++) {
		var b = $('<button>');
		b.addClass('characterList');
		b.attr(characters[i]); 
		b.text(characters[i].name);

		if (characters[i].name != fightSequenceArray[0].name) {
			$('#enemySection').append(b);
		} 
	}

	if (fightSequenceArray.length == 1) {
		// for i = to something but not equal to element in fightSequenceArray;
		console.log("Choose Your First Opponent");

		$('.characterList').one('click', function() {
		defender = $('<div class = "defender" >').text(this.name);
		$('.defender').append(defender);
		fightSequenceArray.push(this);
		displayFightSequenceArray();
		$(this).remove();
		})
	}
}

function displayFightSequenceArray() {
	for (i=0; i<fightSequenceArray.length; i++) {
	console.log(fightSequenceArray[i]);
	}
}



console.log(fightSequenceArray);

$(document).ready(function() {

	displayCharacters();





})

console.log(fightSequenceArray.length);

/*if (fightSequenceArray.length != 1) {

	

$('#obi').one('click', function() {
	var o = $('<button id="obi">obi</button>');
	$('.playerChoice').append(o);
	console.log('you chose Obi-Wan');
	fightSequenceArray.push(obiWan);
	console.log(fightSequenceArray);
	return displayFightSequenceArray();
})

$('#luke').one('click', function() {
	var l = $('<button id="luke">luke</button>');
	$('.playerChoice').append(l);
	console.log('you chose luke');
	fightSequenceArray.push(luke);
	console.log(fightSequenceArray);
	return displayFightSequenceArray();
})

$('#sidious').one('click', function() {
	var s = $('<button id="sidious">sidious</button>');
	$('.playerChoice').append(s);
	console.log('you chose sidious');
	fightSequenceArray.push(sidious);
	console.log(fightSequenceArray);
	return displayFightSequenceArray();
})

	$('#maul').one('click', function() {
	var m = $('<button id="maul">maul</button>');
	$('.playerChoice').append(m);
	console.log('you chose maul');
	fightSequenceArray.push(maul);
	console.log(fight);
	return displayFightSequenceArray();
})

	

} else {
	console.log("working?");
}*/






/*function figthSequence() {

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
}*/

// choose a player
// simulate mouse click

/*function checkKey(e) {

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
}*/




/*function choiceSequence() {
	
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
}*/



// $('')


	

// console.log('choose your character');

// displayFightSequenceArray();

/*$('#obi').one('click', function() {
	var o = $('<button id="obi">obi</button>');
	$('.chosenPlayer').append(o);
	console.log('you chose Obi-Wan');
	fightSequenceArray.push(obiWan);
	
})

	$('#luke').one('click', function() {
	var l = $('<button id="luke">luke</button>');
	$('.chosenPlayer').append(l);
	console.log('you chose luke');
	fightSequenceArray.push(luke);
})

	$('#sidious').one('click', function() {
	var s = $('<button id="sidious">sidious</button>');
	$('.chosenPlayer').append(s);
	console.log('you chose sidious');
	fightSequenceArray.push(sidious);
})

	$('#maul').one('click', function() {
	var m = $('<button id="maul">maul</button>');
	$('.chosenPlayer').append(m);
	console.log('you chose maul');
	fightSequenceArray.push(maul);
})



// document.onkeydown = function(event) {

// checkKey();



// choiceSequence();


})*/



