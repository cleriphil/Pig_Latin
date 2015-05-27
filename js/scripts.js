var pigLatin = function(word) {
  var firstLetter = word[0]
  if (/[qwrtypsdfghjklzxcvbnm]/i.test(firstLetter)) {
    return pigLatinConsonant(word);
  } else {
    return pigLatinVowel(word);
  }
};

var pigLatinVowel = function(word) {
  word = word.concat('ay');
  return word;
};

var pigLatinConsonant = function(word) {

  var firstLetter = word[0]
  var firstTwo = word.substring(0, 2)
  var firstThree = word.substring(0, 3)

  if (/[qwrtypsdfghjklzxcvbnm]{3,}/i.test(word.substring(0,3))) {
    word = word.substring(3, word.length)
    word = word.concat(firstThree).concat('ay')
    return word;
  } else if (/[qwrtypsdfghjklzxcvbnm]{2,}/i.test(word.substring(0,2))) {
    word = word.substring(2, word.length)
    word = word.concat(firstTwo).concat('ay')
    return word;
  } else {
    word = word.substring(1, word.length)
    word = word.concat(firstLetter).concat('ay')
    return word;
  }
};
