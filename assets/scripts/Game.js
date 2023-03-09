class Game {
	constructor(divPlayer) {
		this._divPlayer = divPlayer;
		
		this._gameWrapper = this._divPlayer.parentNode; //Div contenant le jeu
		
		this._btnPlay = this._divPlayer.querySelector('[data-js-btn-play]'); //Bouton pour que le joueur joue
		
		this._btnStop = this._divPlayer.querySelector('[data-js-btn-stop]'); //Bouton pour que le joueur arrête de jouer
		
		this._replay = document.querySelector('[data-js-replay]'); //Div de fin de partie
		
		this.init(); //Traitement initial de la partie
	}
	
	init = () => {
		this._gameWrapper.firstElementChild.classList.remove('inactive'); //Rendre le premier joueur actif au début de la partie
		
		this._btnPlay.addEventListener('click', this.next);
	}
	
	//S'occupe de la gestion des tours des joueurs
	next = () => {
		this._divPlayer.classList.add('inactive');
		if(this._divPlayer.nextElementSibling && this._divPlayer.nextElementSibling.dataset.jsPlayer == 'player')
			this._divPlayer.nextElementSibling.classList.remove('inactive'); //Rendre actif le prochain joueur s'il existe et n'a pas terminé
		else {
			for (let player of this._gameWrapper.children) {	//Trouver le prochain joueur en partant du haut de la liste
				if(player.dataset.jsPlayer == 'player') {	
					player.classList.remove('inactive');
					break;
				} else
					this.endGame();
			}
		}
	}

	//Gestion de la fin de partie
	endGame = () => {
		let playersState = [];
		for (let player of this._gameWrapper.children) {
			playersState.push(player.dataset.jsPlayer);
		}
		if(!playersState.includes('player')) { //S'il ne reste plus de joueur actif
			this._replay.innerHTML = `<p>Parties jouées : ${window.localStorage.numGames}</p> <button>Rejouer</button>`;
			this._replay.children[1].addEventListener('click', this.newGame);
			
			this.isWinner();
		}
	}
	
	//Gestion du ou des gagnants
	isWinner = () => {
		let tabPlayers = [];
		for (let board of this._gameWrapper.children) {
			let total = board.querySelector('[data-js-total]').innerText;
		
			if(total > 0 && total <= 21)
				tabPlayers.push(total);
		}
		for (let board of this._gameWrapper.children) {
			if(board.querySelector('[data-js-total]').innerText == Math.max(...tabPlayers))
				board.classList.add('won');
		}
	}
	
	//Retour au formulaire initial de choix de nombre de joueurs
	newGame = () => {
		this._gameWrapper.innerHTML = '';
		this._replay.innerHTML = ''
		document.querySelector('[data-js-form]').hidden = false;
	}
}