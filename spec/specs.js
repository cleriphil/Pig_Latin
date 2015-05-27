describe('pigLatinVowel', function() {
  it("will add 'ay' to the end of the word", function() {
    expect(pigLatinVowel('apple')).to.equal('appleay');
  });
});

describe('pigLatinConsonant', function() {
  it("will put the first letter to the end of the word and add 'ay'", function() {
    expect(pigLatinConsonant('ball')).to.equal('allbay');
  });
});
