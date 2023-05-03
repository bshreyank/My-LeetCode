//Que. Given a string, reverse each word in the sentence


var string ='Hello World'

var reverseSentence = reverseBySeparator(string,"");
var reverseEachWord = reverseBySeparator(reverseSentence,"");

function reverseBySeparator(string, separator){
      var rev = string.split(separator).reverse().join(separator);
      return rev
}

console.log(rev)