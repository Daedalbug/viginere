module.exports = {

  encrypt : function(key, plaintext){

    var expandedPlainText = Array.from(plaintext.replace(/[^A-Za-z]/g, ''));
    var expandedKey = Array.from(key);
    var newArray = expandedPlainText.map(function(character, index){

      var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      var upper = false;

      if(character == character.toString().toUpperCase()){
        upper = true;
      }
      var newIndex = (alphabet.indexOf(character.toLowerCase()) + alphabet.indexOf(expandedKey[index % key.length]) + 26) % 26;
      return upper ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    });
    return newArray.join('');
  },

  decrypt : function(key, ciphertext){
    var expandedCipherText = Array.from(ciphertext.replace(/[^A-Za-z]/g, ''));
    var expandedKey = Array.from(key);
    var newArray = expandedCipherText.map(function(character, index){

      var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      var upper = false;

      if(character == character.toString().toUpperCase()){
        upper = true;
      }
      var newIndex = (alphabet.indexOf(character.toLowerCase()) - alphabet.indexOf(expandedKey[index % key.length]) + 26) % 26;
      return upper ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
    });
    return newArray.join('');
  }
};
