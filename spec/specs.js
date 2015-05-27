describe('pigLatinVowel', function() {
  it("will add 'ay' to the end of the word", function() {
    expect(pigLatinVowel('apple')).to.equal('appleay');
  });
});

describe('pigLatinConsonant', function() {
  it("will put the first letter to the end of the word and add 'ay'", function() {
    expect(pigLatinConsonant('ball')).to.equal('allbay');
  });
  it("handles words starting with two consonants", function() {
    expect(pigLatinConsonant('bland')).to.equal('andblay');
  });
  it("handles words starting with three consonants", function() {
    expect(pigLatinConsonant('strong')).to.equal('ongstray');
  })
  it("handles words that start with qu", function (){
    expect(pigLatinConsonant('queen')).to.equal('eenquay');
  });
  it("handles words that have q as the second letter and u as the third", function() {
    expect(pigLatinConsonant('squirt')).to.equal('irtsquay');
  });
});

describe('pigLatin', function () {
  it("it returns the pig latin translation of a word that starts with a vowel", function() {
    expect(pigLatin('elephant')).to.equal('elephantay');
  });
  it("handles words that start with y", function () {
    expect(pigLatin('yellow')).to.equal('ellowyay');
  });
  it("handles unlikey words that start with y and consonants", function (){
    expect(pigLatin('yssellow')).to.equal('ellowyssay')
  });
  it("handles words that start with y and one consonant", function () {
    expect(pigLatin('ysellow')).to.equal('ellowysay')
  });
  it("handles translate sentences containing multiple words", function () {
    expect(pigLatin('hello world')).to.equal('ellohay orldway')
  });
});
