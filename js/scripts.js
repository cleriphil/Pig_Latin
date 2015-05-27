var pigLatinVowel = function(word) {
  word = word.concat('ay');
  return word;
};

var pigLatinConsonant = function(word) {

  var firstLetter = word[0]
  var firstTwo = word.substring(0, 2)
  if (/[qwrtypsdfghjklzxcvbnm]{2,}/i.test(word.substring(0,2))) {
    word = word.substring(2, word.length)
    word = word.concat(firstTwo).concat('ay')
    return word;
  } else {
    word = word.substring(1, word.length)
    word = word.concat(firstLetter).concat('ay')
    return word;
  }
};
