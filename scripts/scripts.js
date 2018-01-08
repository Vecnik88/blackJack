$(document).ready(function() {
	var used_cards = new Array();
	// конструктор, описывающий одну игровую карту
	function card(name, suit, value) {
		this.name = name;
		this.suit = suit;
		this.value = value;
	} 
	// колода карт
	var deck = [
		new card('ace', 'hearts', 11),
		new card('two', 'hearts', 2),
		new card('three', 'hearts', 3),
		new card('four', 'hearts', 4),
		new card('five', 'hearts', 5),
		new card('six', 'hearts', 6),
		new card('seven', 'hearts', 7),
		new card('eight', 'hearts', 8),
		new card('nine', 'hearts', 9),
		new card('ten', 'hearts', 10),
		new card('jack', 'hearts', 10),
		new card('queen', 'hearts', 10),
		new card('king', 'hearts', 10),

		new card('ace', 'diamonds', 11),
		new card('two', 'diamonds', 2),
		new card('three', 'diamonds', 3),
		new card('four', 'diamonds', 4),
		new card('five', 'diamonds', 5),
		new card('six', 'diamonds', 6),
		new card('seven', 'diamonds', 7),
		new card('eight', 'diamonds', 8),
		new card('nine', 'diamonds', 9),
		new card('ten', 'diamonds', 10),
		new card('jack', 'diamonds', 10),
		new card('queen', 'diamonds', 10),
		new card('king', 'diamonds', 10),

		new card('ace', 'clubs', 11),
		new card('two', 'clubs', 2),
		new card('three', 'clubs', 3),
		new card('four', 'clubs', 4),
		new card('five', 'clubs', 5),
		new card('six', 'clubs', 6),
		new card('seven', 'clubs', 7),
		new card('eight', 'clubs', 8),
		new card('nine', 'clubs', 9),
		new card('ten', 'clubs', 10),
		new card('jack', 'clubs', 10),
		new card('queen', 'clubs', 10),
		new card('king', 'clubs', 10),
	
		new card('ace', 'spades', 11),
		new card('two', 'spades', 2),
		new card('three', 'spades', 3),
		new card('four', 'spades', 4),
		new card('five', 'spades', 5),
		new card('six', 'spades', 6),
		new card('seven', 'spades', 7),
		new card('eight', 'spades', 8),
		new card('nine', 'spades', 9),
		new card('ten', 'spades', 10),
		new card('jack', 'spades', 10),
		new card('queen', 'spades', 10),
		new card('king', 'spades', 10),
	];
	// объект описывает игровой процесс
	var hand = {
		cards : new Array(),
		current_total : 0,
		
		sumCardTotal: function() {
			this.current_total = 0;
			for (var i = 0; i < this.cards.length; ++i) {
				var c = this.cards[i];
				this.current_total += c.value;
			}
			$("#hdrTotal").html("Total: " + this.current_total);
			if (this.current_total > 21) {
				$("#btnStick").trigger("click");
				$("#imgResult").attr('src','images/x2.png');
				$("#hdrResult").html("BUST!")
							   .attr('class', 'lose');
			} else if (this.current_total == 21) {
				$("#btnStick").trigger("click");
				$("#imgResult").attr('src','images/check.png');
				$("#hdrResult").html("BlackJack!")
							   .attr('class', 'win');
			} else if (this.current_total <= 21 && this.cards.length == 5) {
				$("#btnStick").trigger("click");
				$("#imgResult").attr('src','images/check.png');
				$("#hdrResult").html("BlackJack - 5 card trick!")
							   .attr('class', 'win');
			}
		}
	};
	// возвращает случайное число
	function getRandom(number){
		return Math.floor(Math.random() * number);
	}
	
	function deal() {
		for(var i = 0; i < 2; ++i) {
			hit();
		}
	}
	
	function hit() {
		var good_card = false;
		do {
			var index = getRandom(52);
			if (!$.inArray(index, used_cards) > -1) {
				good_card = true;
				var c = deck[index];
				used_cards[used_cards.length] = index;
				hand.cards[hand.cards.length] = c;	
				
				var $d = $("<div>");
				$d.addClass("current_hand")
				  .appendTo("#my_hand");
						  
				$("<img>").attr('alt', c.name + ' of ' + c.suit)
						  .attr('title', c.name + ' of ' + c.suit)
						  .attr('src', 'images/cards/' + c.suit + '/' + c.name + '.jpg')
						  .appendTo($d)
						  .fadeOut('slow')
						  .fadeIn('slow');
				
			}
		} while (!good_card);
		good_card = false;	  
		hand.sumCardTotal();
	}
	
	$("#btnDeal").click( function() {
		deal();
		$(this).toggle();
		$("#btnHit").toggle();
		$("#btnStick").toggle();
	});
	
	$("#btnHit").click( function() {
		hit();
	});
	
	function end() {
		$("#btnHit").toggle();
		$("#btnStick").toggle();
		$("#btnRestart").toggle();
	}
	
	$("#btnStick").click(function() {
		$("#hdrResult").html('Stick!')
					   .attr('class', 'win');
		$("#result").toggle();
		end();
	});
	
	$("#btnRestart").click(function() {
		$("#result").toggle();
		$(this).toggle();
		$("#my_hand").empty();
		$("#hdrResult").html('');
		$("#imgResult").attr('src','images/check.png');
		
		used_cards.length = 0;
		hand.cards.length = 0;
		hand.current_total = 0;
		
		$("#btnDeal").toggle()
					 .trigger('click');
	});
});
