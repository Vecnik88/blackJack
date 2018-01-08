$(document).ready(function() {
	var used_cards = new Array();
	var hand = {
		cards: new Array(),
		current_total: 0,
		sumCardTotal: function() {
			this.current_total = 0;
			for (var i = 0; i < this.cards.length; ++i) {
				var c = this.cards[i];
				this.current_total += c.value;
			}
			$("#hdrTotal").html("Total: " + this.current_total);
		}
	};
	function deal() {
		for (var i = 0; i < 2; ++i) {
			hit();
		}
	}
	// возвращает случайное число(карту)
	function getRandom(number) {
		return Math.floor(Math.random() * number);
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
				$d.addClass("current_hant").appendTo("#myHand");
				$("<img>").appendTo($d)
				.attr('src', 'images/cards/' + c.suit + '/' + c.name + '.jpg')
				.fadeOut('slow')
				.fadeIn('slow');
			}
		} while(!good_card);
		good_card = false;
	}
	$("#btnDeal").click(function() {
		deal();
		$(this).toggle();
	});
	// конструктор карты
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
});

