/*
    A deck of cards
    1 deck -> 52 cards
    13 suits -> heart, diamond, spade, club
    1 suit -> 13 cards -> ace, 2-10, jack, queen, king

    Core entities

    Deck
    - cards: Card[]
    - count(): number
    - shuffle(): void
    - deal(numberOfCards): Card[]

    Card
    - rank (Ace, 2-10, Jack, Queen, King)
    - suit (heart, diamond, spade, club)

    Relationships
    Deck is composed of multiple Card object
    classic composition (has-a) relationship

*/
// Use enums for fixed sets of values like suits and ranks for type safety and clarity.
var Suit;
(function (Suit) {
    Suit["Hearts"] = "Hearts";
    Suit["Diamonds"] = "Diamonds";
    Suit["Clubs"] = "Clubs";
    Suit["Spades"] = "Spades";
})(Suit || (Suit = {}));
var Rank;
(function (Rank) {
    Rank["Ace"] = "Ace";
    Rank["Two"] = "2";
    Rank["Three"] = "3";
    Rank["Four"] = "4";
    Rank["Five"] = "5";
    Rank["Six"] = "6";
    Rank["Seven"] = "7";
    Rank["Eight"] = "8";
    Rank["Nine"] = "9";
    Rank["Ten"] = "10";
    Rank["Jack"] = "Jack";
    Rank["Queen"] = "Queen";
    Rank["King"] = "King";
})(Rank || (Rank = {}));
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Card.prototype.getCard = function () {
        return "".concat(this.rank, " of ").concat(this.suit);
    };
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.initializeDeck();
    }
    // Creates a standard 52-card deck.
    Deck.prototype.initializeDeck = function () {
        // Object.values() gets an array of the enum values.
        var suits = Object.values(Suit);
        var ranks = Object.values(Rank);
        for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
            var suit = suits_1[_i];
            for (var _a = 0, ranks_1 = ranks; _a < ranks_1.length; _a++) {
                var rank = ranks_1[_a];
                this.cards.push(new Card(rank, suit));
            }
        }
    };
    Deck.prototype.count = function () {
        return this.cards.length;
    };
    // Fisher-Yates shuffle algo
    Deck.prototype.shuffle = function () {
        var _a;
        // Start from the last element and swap one by one.
        for (var i = this.cards.length - 1; i > 0; i--) {
            // Pick a random index from 0 to i
            var j = Math.floor(Math.random() * (i + 1));
            // Swap arr[i] with the element at random index
            _a = [this.cards[j], this.cards[i]], this.cards[i] = _a[0], this.cards[j] = _a[1];
        }
    };
    Deck.prototype.deal = function (numberOfCards) {
        var removedCards = [];
        while (numberOfCards > 0 && this.cards.length > 0) {
            var removedCard = this.cards.pop();
            removedCards.push(removedCard);
            numberOfCards--;
        }
        return removedCards;
    };
    return Deck;
}());
var card1 = new Card(Rank.Ace, Suit.Hearts);
console.log(card1.getCard());
var deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deal(3));
