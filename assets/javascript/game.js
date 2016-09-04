
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

function someFunction()	{

	for (var i = 0; i < characters.length; i++) {
		var b = $('<button>');
		b.addClass('characterList');
		// b.attr('id' i); 
		b.text(characters[i].name);

		if (characters[i].name != fightSequenceArray[0].name) {
			$('#enemySection').append(b);
		} 
	}

	if (fightSequenceArray.length == 1) {
		
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

	$('.characterList').on('click', function() {
		var clickedID = this.id;
		fightSequenceArray.push(this);
		$(this).appendTo('.playerChoice');

		if (fightSequenceArray.length === 2) {
			$(this).appendTo('.defender');
			console.log(fightSequenceArray);
		} 

		if (this.id === 0) {
			tempArray.push(obiWan);
		}

	})

	figthSequence();

})

console.log(fightSequenceArray.length);

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

