var WordList = (function() {
  var words = ['RABBIT', 'BUNNY', 'CARROT', 'LETTUCE', 'BURROW',
    'FLUFFY', 'FLOPPY', 'LITTER', 'PELLETS'];

  var selectedWord;

  var currentWords = words;
  var usedWords;

  function WordList() {
    return {
      startGame: this.startGame,
    }
  }

  function selectRandomWord() {
    var random = Math.floor(Math.random() * (words.length - 1));
    return words[random];
  }

  function setAvailableWords(word) {
    // find the index of the selected word: indexOf
    // remove the selected word from the list of words, remove the new list of words: splice
    var index = words.indexOf(word);
    return currentWords.splice(index, 1);
  }

  function createWordSpace(node) {
    var letterDiv = document.createElement('div');
    letterDiv.setAttribute('class', 'hiding-letter');

    var span = document.createElement('span');;
    var spanText = document.createTextNode(' ');
    span.appendChild(spanText);
    letterDiv.appendChild(span);
    node.appendChild(letterDiv);
  }

  function createWordSpaces (word) {
    var selectedWordDiv = document.getElementById('selectedWord');
    for (let i = 0; i < word.length; i++) {
      createWordSpace(selectedWordDiv)
    }
  }

  WordList.prototype.startGame = function(word) {
    var word = selectRandomWord();
    createWordSpaces(word);
    return word;
  }

  return WordList;
}());

var Letters = (function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function Letters(word) {
    this.createLetterButtons(word);
  };

  function createLetterButton(i, div, word) {
    var letter = document.createElement('button');
    var letterText = document.createTextNode(alphabet[i]);

    letter.setAttribute('id', 'letter-'+ alphabet[i]);
    letter.setAttribute('class', 'letter-button');
    letter.appendChild(letterText);

    letter.addEventListener('click', function() {
      var isLettersInWord = selectLetter(letter, word);
      checkWord(isLettersInWord, word);
    }, false);
    div.appendChild(letter);
  }

  function checkWord(isLettersInWord, word) {
    console.log('checkWord', isLettersInWord, word);
    var selectedWordDiv = document.getElementById('selectedWord');
    var child_nodes = selectedWordDiv.childNodes;
    console.log(child_nodes);
    for (let i = 0; i < child_nodes.length; i++) {
      const element = child_nodes[i];
      if(isLettersInWord.lettersInWord.indexOf(i) > -1) {
        child_nodes[i].setAttribute('class', 'show-letter');
        // var itemContent = child_nodes[i].innerHTML;
        // child_nodes[i].innerHTML = word[i];
        child_nodes[i].childNodes[0].innerHTML = word[i];
        // var span = document.createElement('span');;
        // var spanText = document.createTextNode(word[i]);
        // span.appendChild(spanText);
        // child_nodes[i].appendChild(span);
      }
    }
  }

  function selectLetter(letter, word) {
    letter.classList.add('selected');
    var id = getId(letter);
    var inWord = word.indexOf(id);

    var lettersInWord = isLetterInWord(id, word);
    return {lettersInWord, id};
  }

  function getId(letterNode) {
    var id = letterNode.getAttribute('id');
    var idArr = id.split('-');
    var letter = idArr[1].toUpperCase();
    return letter;
  }

  function isLetterInWord(letter, word) {
    var lettersIndex = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        lettersIndex.push(i);
      }
    }
    return lettersIndex;
  }

  Letters.prototype.createLetterButtons = function(word) {
    var lettersDiv = document.getElementById('letters');
    for(var i = 0; i < alphabet.length; i++) {
      createLetterButton(i, lettersDiv, word);
    }
  }

  return Letters;
})();


window.onload = (function() {
  var wordList = new WordList();

  var letters = new Letters(wordList.startGame());

}());



