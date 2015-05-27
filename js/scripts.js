var pigLatinVowel = function(word) {
  word = word.concat('ay');
  return word;
};

var pigLatinConsonant = function(word) {
  var firstLetter = word[0]
  word = word.substring(1, word.length)
  word = word.concat(firstLetter).concat('ay')
  return word;
};
