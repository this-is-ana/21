document.addEventListener('DOMContentLoaded', () => {
	let elForm = document.querySelector('[data-js-form]'), //Formulaire pour choisir le nombre de joueurs
		elInput = document.querySelector('[data-js-input]'), //Input du formulaire pour le nombre de joueurs
		elBtn = document.querySelector('[data-js-submit]'), //Bouton pour démarrer la partie
		numGames = 1;

	elBtn.addEventListener('click', (e) => {
		e.preventDefault();
		
		if(elInput.value > 0) { //Nombre de joueurs doit être un nombre positif
		
			//Création ou changement de la valeur de numGames (nombre de parties) dans le localstorage
			window.localStorage.numGames ? window.localStorage.numGames = ++numGames : window.localStorage.numGames = numGames;
			
			elForm.hidden = true;
			
			new Board(elInput.value); //Nouvelle partie
		}
	})
});