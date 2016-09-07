
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

function displayCharacters () {

	for (var i = 0; i < characters.length; i++) {
		var b = $('<button>');
		b.addClass('characterList');
		/*btn btn-default dropdown-toggle*/
		// b.attr('data-toggle', dropdown);
		// b.attr('aria-haspopup', true);
		// b.attr('aria-expand', false);
		b.attr('id', i); 
		b.css('background-image', 'url(" '+ characters[i].img +'  ")');
		// b.text(characters[i].name);
		 $('#buttons').append(b);
	}

	// for (var i = 0; i < characters.length; i++) {
	// 	var li = $('<li>');
	// 	li.addClass('dropItems');
	// 	// b.attr('id', i); 
	// 	// b.css('background-image', 'url(" '+ characters[i].img +'  ")');
	// 	// li.text(characters[i].name);
	// 	li.text(characters[i].health);
	// 	li.text(characters[i].attackPower);

	// 	 $('.dropContent').append(li);
	// }
}

function displayStats () {
	$('.characterList').mouseenter(function(){

		$('ul').removeClass('noDisplay');

		if (this.id == 0) {
			$('ul li:eq(0)').append('Character Name: ' + obiWan.name);
			$('ul li:eq(1)').append('Health: ' + obiWan.health);
			$('ul li:eq(2)').append('Attack Power: ' + obiWan.attackPower);
			$('ul li:eq(3)').append('Counter Attack Power: ' + obiWan.counterAttackPower);
		} else if (this.id == 1) {
			$('ul li:eq(0)').append('Character Name: ' + luke.name);
			$('ul li:eq(1)').append('Health: ' + luke.health);
			$('ul li:eq(2)').append('Attack Power: ' + luke.attackPower);
			$('ul li:eq(3)').append('Counter Attack Power: ' + luke.counterAttackPower);
		} else if (this.id == 2) {
			$('ul li:eq(0)').append('Character Name: ' + sidious.name);
			$('ul li:eq(1)').append('Health: ' + sidious.health);
			$('ul li:eq(2)').append('Attack Power: ' + sidious.attackPower);
			$('ul li:eq(3)').append('Counter Attack Power: ' + sidious.counterAttackPower);
		} else if (this.id == 3) { 
			$('ul li:eq(0)').append('Character Name: ' + maul.name);
			$('ul li:eq(1)').append('Health: ' + maul.health);
			$('ul li:eq(2)').append('Attack Power: ' + maul.attackPower);
			$('ul li:eq(3)').append('Counter Attack Power: ' + maul.counterAttackPower);
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
			$(this).hide().appendTo('.playerChoice').fadeIn('slow');
			$('#instructionBar').empty();
			$('#instructionBar').append('Choose your opponent');
			$('ul').removeClass('noDisplayStatusPlayer');
			$('#playerHealth').width(tempArray[0].health + '%').attr('aria-valuemax', tempArray[0].health).attr('aria-valuenow', tempArray[0].health);
			$('#playerAttackPower').width(tempArray[0].attackPower + '%').attr('aria-valuenow', tempArray[0].attackPower);

			if (this.id == 0) {
			$('ul.playerStats li:eq(0)').append('Character Name: ' + obiWan.name);
			$('ul.playerStats li:eq(1)').append('Health: ' + obiWan.health);
			$('ul.playerStats li:eq(3)').append('Attack Power: ' + obiWan.attackPower);
		} else if (this.id == 1) {
			$('ul.playerStats li:eq(0)').append('Character Name: ' + luke.name);
			$('ul.playerStats li:eq(1)').append('Health: ' + luke.health);
			$('ul.playerStats li:eq(3)').append('Attack Power: ' + luke.attackPower);
		} else if (this.id == 2) {
			$('ul.playerStats li:eq(0)').append('Character Name: ' + sidious.name);
			$('ul.playerStats li:eq(1)').append('Health: ' + sidious.health);
			$('ul.playerStats li:eq(3)').append('Attack Power: ' + sidious.attackPower);
		} else { 
			$('ul.playerStats li:eq(0)').append('Character Name: ' + maul.name);
			$('ul.playerStats li:eq(1)').append('Health: ' + maul.health);
			$('ul.playerStats li:eq(3)').append('Attack Power: ' + maul.attackPower);
		}

		} else if (fightSequenceArray.length === 2) {
			$(this).hide().appendTo('.defender').fadeIn('slow');
			$('#instructionBar').empty();
			$('ul').removeClass('noDisplayStatusDefender');
			$('#defenderHealth').width(tempArray[1].health + '%').attr('aria-valuemax', tempArray[1].health).attr('aria-valuenow', tempArray[1].health);
			$('#attack').hide().removeClass('noDisplay').fadeIn('slow');

			if (this.id == 0) {
			$('ul.defenderStatus li:eq(0)').append('Character Name: ' + obiWan.name);
			$('ul.defenderStatus li:eq(1)').append('Health: ' + obiWan.health);
			} else if (this.id == 1) {
			$('ul.defenderStatus li:eq(0)').append('Character Name: ' + luke.name);
			$('ul.defenderStatus li:eq(1)').append('Health: ' + luke.health);
			} else if (this.id == 2) {
			$('ul.defenderStatus li:eq(0)').append('Character Name: ' + sidious.name);
			$('ul.defenderStatus li:eq(1)').append('Health: ' + sidious.health);
			} else { 
			$('ul.defenderStatus li:eq(0)').append('Character Name: ' + maul.name);
			$('ul.defenderStatus li:eq(1)').append('Health: ' + maul.health);
			}
		} else {
			location.reload();
			console.log('please choose attack or reset');
		}
	})
}

function figthSequence() {

	$('#attack').on('click', function() {

		var randomNum = Math.floor((Math.random() * 5)+1);
		var attack = tempArray[1].health - (tempArray[0].attackPower * randomNum);
		tempArray[1].health = attack;

		var randomNum2 = Math.floor((Math.random() * 5) +1);
		var counterAttack = tempArray[0].health - (tempArray[1].attackPower * randomNum2);
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
			return;
		} 

		$('#playerHealth').width(tempArray[0].health + '%').attr('aria-valuenow', tempArray[0].health);
		$('#playerAttackPower').width(tempArray[0].attackPower + '%').attr('aria-valuenow', tempArray[0].attackPower);
		$('#defenderHealth').width(tempArray[1].health + '%').attr('aria-valuenow', tempArray[1].health);	
	})
}

$(document).ready(function() {

	displayCharacters();

	displayStats();

	chooseCharacters();

	figthSequence();
})
