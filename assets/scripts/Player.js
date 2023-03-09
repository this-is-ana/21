class Player extends Game {
	constructor(divPlayer) {
		super(divPlayer);
	
		this._total = 0; //Total de la valeur des cartes du joueur
		
		this.init(); //Traitement initial du joueur
	}
	
	init = () => {
		this._btnPlay.addEventListener('click', this.play); //Bouton pour que le joueur joue
		this._btnStop.addEventListener('click', this.stop); //Bouton pour que le joueur arrête de jouer
	}
	
	play = (e) => { //Gestion du jeu d'un joueur
		e.preventDefault();
		
		let card = new Card(); //Tirage d’une carte
		
		this._divPlayer.querySelector('[data-js-card-list]').insertAdjacentHTML('beforeend', `<li>${card._myCard.name} ${card._suit}</li>`);
		
		this._total += card._myCard.value;
	
		this._divPlayer.querySelector('[data-js-total]').innerText = this._total;
		
		if(this._total > 21) { //Cas où le joueur perd, car il a dépassé 21
			this._divPlayer.classList.add('lost');
			this._divPlayer.dataset.jsPlayer = 'done';
			
			this.next(); //Tour du prochain joueur
		}
	}
	
	stop = (e) => { //Gestion du cas où le joueur arrête son jeu
		e.preventDefault();
		
		this._divPlayer.classList.add('inactive');
		this._divPlayer.dataset.jsPlayer = 'done';
		
		this.next(); //Tour du prochain joueur
	}
}