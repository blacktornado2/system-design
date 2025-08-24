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
enum Suit {
    Hearts = 'Hearts',
    Diamonds = 'Diamonds',
    Clubs = 'Clubs',
    Spades = 'Spades',
}

enum Rank {
    Ace = 'Ace',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Jack = 'Jack',
    Queen = 'Queen',
    King = 'King',
}

class Card {
    private readonly rank: Rank;
    private readonly suit: Suit;

    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }

    public getCard(): string {
        return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    private cards: Card[] = [];

    constructor() {
        this.initializeDeck();
    }

    // Creates a standard 52-card deck.

    private initializeDeck(): void {
        // Object.values() gets an array of the enum values.
        const suits = Object.values(Suit);
        const ranks = Object.values(Rank);

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    public count(): number {
        return this.cards.length;
    }

    // Fisher-Yates shuffle algo
    public shuffle(): void {
        // Start from the last element and swap one by one.
        for (let i = this.cards.length - 1; i > 0; i--) {

            // Pick a random index from 0 to i
            const j = Math.floor(Math.random() * (i + 1));

            // Swap arr[i] with the element at random index
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    deal(numberOfCards: number): Card[] {
        let removedCards: Card[] = [];
        while (numberOfCards > 0 && this.cards.length > 0) {
            let removedCard: Card = this.cards.pop()!;
            removedCards.push(removedCard);
            numberOfCards--;
        }
        return removedCards;
    }
}

const card1: Card = new Card(Rank.Ace, Suit.Hearts);
console.log(card1.getCard());

const deck1: Deck = new Deck();
deck1.shuffle();
console.log(deck1.deal(3))