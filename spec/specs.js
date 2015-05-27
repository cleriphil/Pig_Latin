describe('pigLatinVowel', function() {
  it("will add 'ay' to the end of the word", function() {
    expect(pigLatinVowel('apple')).to.equal('appleay');
  });
});
