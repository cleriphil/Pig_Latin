var pigLatin = function(word) {
  var firstLetter = word[0]
  if (firstLetter === 'y') {
    return pigLatinConsonant(word);
  }
  if (/[qwrtpsdfghjklzxcvbnm]/i.test(firstLetter)) {
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

  if (firstTwo === "qu") {
    word = word.substring(2, word.length)
    word = word.concat(firstTwo).concat('ay')
    return word;
  } else if ((word.substring(1,3)) === 'qu') {
    word = word.substring(3, word.length)
    word = word.concat(firstLetter).concat('qu').concat('ay')
    return word;
  } else if (/[qwrtpsdfghjklzxcvbnm]{2,}/i.test(word.substring(1,3))) {
    word = word.substring(3, word.length)
    word = word.concat(firstThree).concat('ay')
    return word;
  } else if (/[qwrtpsdfghjklzxcvbnm]/i.test(word.substring(1,2))) {
    word = word.substring(2, word.length)
    word = word.concat(firstTwo).concat('ay')
    return word;
  } else {
    word = word.substring(1, word.length)
    word = word.concat(firstLetter).concat('ay')
    return word;
  }
};

$(document).ready(function() {
  $('form#translator').submit(function(event) {
    $('#result').show();
    var word = $('input#word').val();
    var output = pigLatin(word);
    $('.pig_latin').text(output);
    event.preventDefault();
  });

});
