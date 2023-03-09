class Card {
	constructor() {
		this._cards = [
						 {name: 'as', value: 11}, 
						 {name: 2, value: 2},
						 {name: 3, value: 3},
						 {name: 4, value: 4},
						 {name: 5, value: 5},
						 {name: 6, value: 6},
						 {name: 7, value: 7},
						 {name: 8, value: 8},
						 {name: 9, value: 9},
						 {name: 10, value: 10},
						 {name: 'valet', value: 10},
						 {name: 'dame', value: 10},
						 {name: 'roi', value: 10}
						];
		this._suits = [' de carreau', ' de coeur', ' de pique', ' de trèfle'];
						
		this._myCard = this._cards[Math.floor((Math.random() * 13))]; //Chiffre aléatoire de 0 à 12
		
		this._suit = this._suits[Math.floor((Math.random() * 4))]; //Chiffre aléatoire de 0 à 3
	}
}