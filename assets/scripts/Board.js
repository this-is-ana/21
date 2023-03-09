class Board {
	constructor (numPlayers) {
		this._numPlayers = numPlayers; //Nombre de joueurs
		
		this._gameWrapper = document.querySelector('[data-js-game-wrapper]'); //Div contenant le jeu
		
		this.init(); //Traitement initial du jeu
	}
	
	init = () => {
		for (let i = 1; i <= this._numPlayers; i++) { //Créer le DOM de chaque joueur
			let divPlayerStr = `<div class="inactive" data-js-player="player">
									<h2>Joueur ${i}</h2>
									<ul data-js-card-list></ul>
									<p>Total : <span data-js-total>0</span></p>
									<button data-js-btn-play>Jouer</button>
									<button data-js-btn-stop>Arrêter</button>
								</div>`;
			this._gameWrapper.insertAdjacentHTML('beforeend', divPlayerStr);
			let divPlayer = document.querySelectorAll('[data-js-player]')[i-1];
			
			new Player(divPlayer);
		}
	}
}