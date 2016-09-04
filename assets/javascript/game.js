
function character(characterName, health, attackPower, counterAttackPower, img) {
	this.name = characterName;
	this.health = health;
	this.attackPower = attackPower
	this.counterAttackPower = counterAttackPower;
	this.img = img;
}

var obiWan = new character('Obi-Wan Kenobi', 120 , 6, 15.5, 'assets/images/obi.jpeg');
var luke = new character('Luke Skywalker' , 100, 6, 37.5, 'assets/images/luke.ico');
var sidious = new character('Darth Sidious', 150, 6, 10, 'assets/images/sidious.ico');
var maul = new character('Darth Maul', 180, 6, 10, 'assets/images/maul.png');

var characters = [];
characters.push(obiWan, luke, sidious, maul);

var fightSequenceArray = [];
var tempArray = [];

// var playerChoice = 0;
// var player = 0;
// var opponent = 0;

function displayCharacters () {

	for (var i = 0; i < characters.length; i++) {
		var b = $('<button>');
		b.addClass('characterList');
		b.attr('id', i); 
		b.css('background-image', 'url(" '+ characters[i].img +'  ")');
		b.text(characters[i].name);
		 $('#buttons').append(b);
	}	
}

function playerID() {
	if (clickedID === 0) {
		$('.playerChoice').append(obiWan.name);
		console.log(obiWan.name);
	}
}

function chooseCharacters()	{
	$('.characterList').on('click', function() {
		fightSequenceArray.push(this);

		if (fightSequenceArray.length === 1) {
			$(this).appendTo('.playerChoice');
		} else if (fightSequenceArray.length === 2) {
			$(this).appendTo('.defender');
		} else {
			console.log('please choose attack or reset');
		}

		if (this.id == 0) {
			tempArray.push(obiWan);
		} else if (this.id == 1) {
			tempArray.push(luke);
		} else if (this.id == 2) {
			tempArray.push(sidious);
		} else { 
			tempArray.push(maul);
		}
		console.log(tempArray);
	})	
}

function figthSequence() {

	$('#attack').on('click', function() {

	var randomNum = Math.floor((Math.random() * 5)+1);
	var attack = opponent.health - (player.attackPower * randomNum);
	opponent.health = attack;

	if (player.health <= 0) {
		console.log('You Lost');
		return;
	}
	else if (opponent.health <= 0) {
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

	})
}

console.log(fightSequenceArray);



$(document).ready(function() {


	displayCharacters();

	chooseCharacters();

	figthSequence();

})

console.log(fightSequenceArray.length);
console.log(fightSequenceArray);

// $( "button" ).click(function() {
  // $( this ).replaceWith( "<div>" + $( this ).text() + "</div>" );
// });

/*var randomNum = Math.floor((Math.random() * 5)+1);
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
	console.log(fightSequenceArray[0].health);*/


// playerChoice = $('.playerChoice').text(this.name);
		// $('.playerChoice').appendTo(playerChoice);
		// fightSequenceArray.push(this);

		// displayFightSequenceArray();
		// $('#buttons').attr('id', 'buttonsNone');

		// $('p').addClass('noDisplay' 'display');

