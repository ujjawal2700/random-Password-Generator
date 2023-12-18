passwordGenerator = (maxChar = 1, [], [], [], []) => {
    var myPassword = "";
    while(maxChar != 0){
        var randomeCategory = Math.floor(Math.random() * 4);
        var randomAlphabate = Math.floor(Math.random() * 26);
        var randomNumber = Math.floor(Math.random() * 10);
        var randomSymbol = Math.floor(Math.random() * 28);

        switch (randomeCategory) {
            case 0:
                myPassword += cAlphabate[randomAlphabate];
                break;
            case 1:
                myPassword += sAlphabate[randomAlphabate];
                break;
            case 2:
                myPassword += number[randomNumber];
                break;
            case 3:
                myPassword += symbols[randomSymbol];
                break;
        }
        maxChar--;
    }
    alert("Your Generated Password is : " + myPassword);
    return myPassword;
}

cAlphabate = ["A", "b", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
sAlphabate = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "}", "]", "|", ";", ":", ",", "<", ">", ".", "/", "?"];
// console.log(randomeCategory = Math.floor(Math.random() * 4) + 1);

var Maxchar = prompt("Enter the number of character you want in your password: ");
console.log("Your Generated Password is : " + passwordGenerator(Maxchar, cAlphabate, sAlphabate, number, symbols));