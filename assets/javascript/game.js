

// GLOBAL VARIABLES
// =================================================================================


var fightSequenceArray = [];
var tempArray = [];
var obiWan = new character('Obi-Wan Kenobi', 120 , 20, 30, 'assets/images/obi.png');
var luke = new character('Luke Skywalker' , 100, 30, 40, 'assets/images/luke.ico');
var sidious = new character('Darth Sidious', 150, 15, 20, 'assets/images/sidious.ico');
var maul = new character('Darth Maul', 180, 10, 15, 'assets/images/maul.png');

var characters = [];
characters.push(obiWan, luke, sidious, maul);

var pHealth = 0;

var dHealth = 0;

// FUNCTIONS
// ===================================================================================

function character(characterName, health, attackPower, counterAttackPower, img) {
	this.name = characterName;
	this.health = health;
	this.attackPower = attackPower;
	this.counterAttackPower = counterAttackPower;
	this.img = img;
	this.displayStats = function() {
		$('ul li:eq(0)').append('Character Name: ' + this.name);
		$('ul li:eq(1)').append('Health: ' + this.health);
		$('ul li:eq(2)').append('Attack Power: ' + this.attackPower);
		$('ul li:eq(3)').append('Counter Attack Power: ' + this.counterAttackPower);
	};
	this.playerStats = function() {
		$('ul.playerStats li:eq(0)').append('Character Name: ' + this.name);
		$('ul.playerStats li:eq(1)').append('Health: ' + this.health);
		$('ul.playerStats li:eq(3)').append('Attack Power: ' + this.attackPower);
		pHealth = this.health;
	};
	this.defenderStats = function() {
		$('ul.defenderStatus li:eq(0)').append('Character Name: ' + this.name);
		$('ul.defenderStatus li:eq(1)').append('Health: ' + this.health);
		dHealth = this.health;
	}
}

function displayCharacters () {

	for (var i = 0; i < characters.length; i++) {
		var b = $('<button>');
		b.addClass('characterList');
		b.attr('id', i); 
		b.css('background-image', 'url(" '+ characters[i].img +'  ")');
		$('#buttons').append(b);
	}
}

function displayStats () {

	$('.characterList').mouseenter(function(){

		$('ul').removeClass('noDisplay');

		if (this.id == 0) {
			obiWan.displayStats();
		} else if (this.id == 1) {
			luke.displayStats();
		} else if (this.id == 2) {
			sidious.displayStats();
		} else if (this.id == 3) { 
			maul.displayStats();
		}
	})

	$('.characterList').mouseleave(function(){

		$('#displayStats').addClass('noDisplay');
		$('#displayStats li').empty();
	})
}

function chooseCharacters()	{

	$('.characterList').on('click', function() {
		fightSequenceArray.push(this);

		if (this.id == 0) {
			tempArray.push(obiWan);
		} else if (this.id == 1) {
			tempArray.push(luke);
		} else if (this.id == 2) {
			tempArray.push(sidious);
		} else { 
			tempArray.push(maul);
		}

		if (fightSequenceArray.length === 1) {
			dHealth = 0;
			$(this).hide().appendTo('.playerChoice').fadeIn('slow');
			$('#instructionBar').empty();
			$('#instructionBar').append('Choose your opponent');
			$('ul').removeClass('noDisplayStatusPlayer');
			$('#playerHealth').width('100%').attr('aria-valuemax', tempArray[0].health).attr('aria-valuenow', tempArray[0].health);
			$('#playerAttackPower').width(tempArray[0].attackPower + '%').attr('aria-valuenow', tempArray[0].attackPower);


			if (this.id == 0) {
				obiWan.playerStats();
			} else if (this.id == 1) {
				luke.playerStats();
			} else if (this.id == 2) {
				sidious.playerStats();
			} else if (this.id == 3) { 
				maul.playerStats();
			}

		} else if (fightSequenceArray.length === 2) {
			$(this).hide().appendTo('.defender').fadeIn('slow');
			$('#instructionBar').empty();
			$('ul').removeClass('noDisplayStatusDefender');
			$('#defenderHealth').width('100%').attr('aria-valuemax', tempArray[1].health).attr('aria-valuenow', tempArray[1].health);
			$('#attack').hide().removeClass('noDisplay').fadeIn('slow');

			if (this.id == 0) {
				obiWan.defenderStats();
			} else if (this.id == 1) {
				luke.defenderStats();
			} else if (this.id == 2) {
				sidious.defenderStats();
			} else if (this.id == 3) { 
				maul.defenderStats();
			}

		} else {
			location.reload();
		}
	})
}

function figthSequence() {

	$('#attack').on('click', function() {

		var randomNum = Math.floor((Math.random() * 3)+1);
		console.log(randomNum);
		var attack = tempArray[1].health - (tempArray[0].attackPower * randomNum);
		tempArray[1].health = attack;
		tempArray[0].attackPower = tempArray[0].attackPower + 10;
		console.log(tempArray[0].attackPower);

		var randomNum2 = Math.floor((Math.random() * 2) +1);
		console.log(randomNum2);
		var counterAttack = tempArray[0].health - (tempArray[1].counterAttackPower * randomNum2);
		tempArray[0].health = counterAttack;

		if (tempArray[0].health <= 0) {
			$('#instructionBar').empty();
			$('#instructionBar').append('You Lost click any character to restart');
			$('.playerChoice').empty();
			return;
		}
		else if (tempArray[1].health <= 0) {
			tempArray.splice(1, 1);
			fightSequenceArray.splice(1,1);
			$('#instructionBar').empty();
			$('#instructionBar').append('Choose your opponent');
			$('.defender').empty();
			$('ul.defenderStatus li:eq(0)').empty();
			$('ul.defenderStatus li:eq(1)').empty();
			$('.defenderStatus').addClass('noDisplayStatusDefender');
			dHealth = 0;
			return;
		} 

		$('#playerHealth').width((tempArray[0].health/pHealth)*100 + '%').attr('aria-valuenow', tempArray[0].health);
		$('#playerAttackPower').width(tempArray[0].attackPower + '%').attr('aria-valuenow', tempArray[0].attackPower);
		$('#defenderHealth').width((tempArray[1].health/dHealth)*100 + '%').attr('aria-valuenow', tempArray[1].health);	
	})
}

// ================================================================================

$(document).ready(function() {

	displayCharacters();

	displayStats();

	chooseCharacters();

	figthSequence();
})
