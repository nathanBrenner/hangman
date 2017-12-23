Design
  vanilla js: shows that I’m not dependent on a framework, frameworks can be effective for scaling an app, and can be overkill for a small scoped project like this
		- javascript 5: shows that I understand syntax and I’m not reliant on the sugar from es6
	list of words: RABBIT, BUNNY, CARROT, LETTUCE, BURROW, FLUFFY, FLOPPY, LITTER, PELLETS.
	New game: e: start game => 
		1. select a word at random, 
			- remove that word from the words array, 
			- assign it as selected word
			- Show a blank line for each letter of the word
			- show count of guesses (max is 8)
		2. create a button for each letter.
			- on click:
				- disable button
				- check if letter on button is in selected word
				- if letter in word, show letter in list
				- if letter not in word, subtract one guess and draw the hangman picture
		3. If guess === 0, show game over
		4. if letters on word are all shown, show win message
		5. when game is over, show button to start new game
  bookmark turns: collect state:
		- create an empty array at the beginning of each turn, and push the letters that have been selected
		- create a list of objects that show a state of a game with the array of  letters selected, and the guesses remaining
	sharing:
		- create a hash that can convert the current state
			- on navigations, check query on url to set the state of the game
	undo: button on click removes last letter selected
		- if letter was not in selected word, add guess (no more than 8)
		- if letter was in selected word, remove letter from being displayed
  standards-complaint web browser
		- use css files, not html attributes
  security: client side tampering: 
		- don’t show the list of available words
		- url must have some sort of hash that hides the state of the game
		https://blog.jscrambler.com/the-most-effective-way-to-protect-client-side-javascript-applications/
  proxer-friendly? 
