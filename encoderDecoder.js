const letsGo = document.querySelector('.lets-go');
const start = document.querySelector('.start');
const type = document.querySelector('.type');
const select = document.querySelector('select');
const typeBtn = document.querySelector('.type-btn');
const container = document.querySelector('.container');
const h4 = document.querySelector('h4');
const encode = document.querySelector('.encode');
const decode = document.querySelector('.decode');
const clearEn = document.querySelector('.clear-en');
const copyEn = document.querySelector('.copy-en');
const clearDe = document.querySelector('.clear-de');
const copyDe = document.querySelector('.copy-de');
const encodeArea = document.querySelector('.encode-area');
const decodeArea = document.querySelector('.decode-area');
const goBack = document.querySelector('.go-back');



//---custom binary code---

function encodeCBinary(str){
    var encoded = '',temp='';
    var text = Array.from(str.toLowerCase());
    text.forEach(elem => {
        
        switch (elem) {
            case "a":
                temp = '001 ';
                break;
            case "b":
                temp = '0101 ';
                break;
            case "c":
                temp = '00101 ';
                break;
            case "d":
                temp ='11010 ';
                break;
            case "e":
                temp = '1011101 ';
                break;
            case "f":
                temp = '111101 ';
                break;
            case "g":
                temp = '1010101 ';
                break;
            case "h":
                temp = '100101 ';
                break;
            case "i":
                temp = '10110101 ';
                break;
            case "j":
                temp = '10111011 ';
                break;
            case "k":
                temp = '10111001 ';
                break;
            case "l":
                temp = '101110101 ';
                break;
            case "m":
                temp = '10111101 ';
                break;
            case "n":
                temp = '11011101 ';
                break;
            case "o":
                temp = '10101101 ';
                break;
            case "p":
                temp = '10101 ';
                break;
            case "q":
                temp = '11101 ';
                break;
            case "r":
                temp = '1101 ';
                break;
            case "s":
                temp = '1011 ';
                break;
            case "t":
                temp = '101101 ';
                break;
            case "u":
                temp = '101111 ';
                break;
            case "v":
                temp = '101 ';
                break;
            case "w":
                temp = '101110 ';
                break;
            case "x":
                temp = '101001 ';
                break;
            case "y":
                temp = '10100101 ';
                break;
            case "z":
                temp = '111010101 ';
                break;
            case "1":
                temp = '101011011 ';
                break;
            case "2":
                temp = '101011001 ';
                break;
            case "3":
                temp = '101011101 ';
                break;
            case "4":
                temp = '10111 ';
                break;
            case "5":
                temp = '01100 ';
                break;
            case "6":
                temp = '1011010 ';
                break;
            case "7":
                temp = '101101001 ';
                break;
            case "8":
                temp = '100110101 ';
                break;
            case "9":
                temp = '1001001 ';
                break;
            case "0":
                temp = '1001101 ';
                break;
            case ",":
                temp = '1001111 ';
                break;
            case ".":
                temp = '101100 ';
                break;
            case ":":
                temp = '1011111 ';
                break;
            case ";":
                temp = '101111001 ';
                break;
            case "/":
                temp = '1011110101 ';
                break;
            case "=":
                temp = '001100 ';
                break;
            case "+":
                temp = '00010 ';
                break;
            case "-":
                temp = '01 ';
                break;
            case "_":
                temp = '10 ';
                break;
            case "(":
                temp = '0001 ';
                break;
            case ")":
                temp = '000101 ';
                break;
            case "{":
                temp = '00001 ';
                break;
            case "}":
                temp = '1011110001 ';
                break;
            case "[":
                temp = '01001 ';
                break;
            case "]":
                temp = '01010 ';
                break;
            case "\"":
                temp = '101101010101 ';
                break;
            case "\'":
                temp = '000011001 ';
                break;
            case "\\":
                temp = '00001110110 ';
                break;
            case "&":
                temp = '000011101110 ';
                break;
            case "@":
                temp = '001001110110 ';
                break;
            case "!":
                temp = '100001110110 ';
                break;
            case " ":
                temp = '001101 ';
                break;
            default:
                temp = elem;
                break;
        }
        encoded += temp;
    });
    return encoded;
}


function decodeCBinary(str) {
    var decoded = '' , temp = '';
    var text = str.trim().split(" ");
    text.forEach(elem => {
         
         switch(elem){
             case "001":
                 temp = 'a';
                 break;
             case "0101":
                 temp = 'b';
                 break;
             case "00101":
                 temp = 'c';
                 break;
             case "11010":
                 temp = 'd';
                 break;
             case "1011101":
                 temp = 'e';
                 break;
             case "111101":
                 temp = 'f';
                 break;
             case "1010101":
                 temp = 'g';
                 break;
             case "100101":
                 temp = 'h';
                 break;
             case "10110101":
                 temp = 'i';
                 break;
             case "10111011":
                 temp = 'j';
                 break;
             case "10111001":
                 temp = 'k';
                 break;
             case "101110101":
                 temp = 'l';
                 break;
             case "10111101":
                 temp = 'm';
                 break;
             case "11011101":
                 temp = 'n';
                 break;
             case "10101101":
                 temp = 'o';
                 break;
             case "10101":
                 temp = 'p';
                 break;
             case "11101":
                 temp = 'q';
                 break;
             case "1101":
                 temp = 'r';
                 break;
             case "1011":
                 temp = 's';
                 break;
             case "101101":
                 temp = 't';
                 break;
             case "101111":
                 temp = 'u';
                 break;
             case "101":
                 temp = 'v';
                 break;
             case "101110":
                 temp = 'w';
                 break;
             case "101001":
                 temp = 'x';
                 break;
             case "10100101":
                 temp = 'y';
                 break;
             case "111010101":
                 temp = 'z';
                 break;
             case "101011011":
                 temp = '1';
                 break;
             case "101011001":
                 temp = '2';
                 break;
             case "101011101":
                 temp = '3';
                 break;
             case "10111":
                 temp = '4';
                 break;
             case "01100":
                 temp = '5';
                 break;
             case "1011010":
                 temp = '6';
                 break;
             case "101101001":
                 temp = '7';
                 break;
             case "100110101":
                 temp = '8';
                 break;
             case "1001001":
                 temp = '9';
                 break;
             case "1001101":
                 temp = '0';
                 break;
             case "1001111":
                 temp = ',';
                 break;
             case "101100":
                 temp = '.';
                 break;
             case "1011111":
                 temp = ':';
                 break;
             case "101111001":
                 temp = ';';
                 break;
             case "1011110101":
                 temp = '/';
                 break;
             case "001100":
                 temp = '=';
                 break;
             case "00010":
                 temp = '+';
                 break;
             case "01":
                 temp = '-';
                 break;
             case "10":
                 temp = '_';
                 break;
             case "0001":
                 temp = '(';
                 break;
             case "000101":
                 temp = ')';
                 break;
             case "00001":
                 temp = '{';
                 break;
             case "1011110001":
                 temp = '}';
                 break;
             case "01001":
                 temp = '[';
                 break;
             case "01010":
                 temp = ']';
                 break;
             case "101101010101":
                 temp = '\"';
                 break;
             case "000011001":
                 temp = '\'';
                 break;
             case "00001110110":
                 temp = '\\';
                 break;
            case "000011101110":
                temp = '& ';
                break;
            case "001001110110":
                temp = '@ ';
                break;
            case "100001110110":
                temp = '! ';
                break;
             case "001101":
                 temp = ' ';
                 break;

             default:
                 temp = elem;
                 break;
         }
         decoded += temp;

    });
    return decoded;
    
}
text = "001 0101 00101 11010 1011101 111101 1010101 100101 10110101 10111011 10111001 101110101 10111101 11011101 10101101 10101 11101 1101 1011 101101 101111 101 101110 101001 10100101 111010101 101011011 101011001 101011101 10111 01100 1011010 101101001 100110101 1001001 1001101 101100 1011111 000011001 101101010101 1011110001 01010 ";
// decodeCBinary(text);
// encodeCBinary("Abcdefghijklmnopqrstuvwxyz1234567890.:'\"}]");


//---morse code---

function encodeMorse(str) {
    var encoded = '', temp = '';

    
    var text = Array.from(str.toLowerCase());
    text.forEach(elem => {
        
        switch (elem) {
            case "a":
                temp = '.- ';
                break;
            case "b":
                temp = '-... ';
                break;
            case "c":
                temp = '-.-. ';
                break;
            case "d":
                temp ='-.. ';
                break;
            case "e":
                temp = '. ';
                break;
            case "f":
                temp = '..-. ';
                break;
            case "g":
                temp = '--. ';
                break;
            case "h":
                temp = '.... ';
                break;
            case "i":
                temp = '.. ';
                break;
            case "j":
                temp = '.--- ';
                break;
            case "k":
                temp = '-.- ';
                break;
            case "l":
                temp = '.-.. ';
                break;
            case "m":
                temp = '-- ';
                break;
            case "n":
                temp = '-. ';
                break;
            case "o":
                temp = '--- ';
                break;
            case "p":
                temp = '.--. ';
                break;
            case "q":
                temp = '--.- ';
                break;
            case "r":
                temp = '.-. ';
                break;
            case "s":
                temp = '... ';
                break;
            case "t":
                temp = '- ';
                break;
            case "u":
                temp = '..- ';
                break;
            case "v":
                temp = '...- ';
                break;
            case "w":
                temp = '.-- ';
                break;
            case "x":
                temp = '-..- ';
                break;
            case "y":
                temp = '-.-- ';
                break;
            case "z":
                temp = '--.. ';
                break;
            case "1":
                temp = '.---- ';
                break;
            case "2":
                temp = '..--- ';
                break;
            case "3":
                temp = '...-- ';
                break;
            case "4":
                temp = '....- ';
                break;
            case "5":
                temp = '..... ';
                break;
            case "6":
                temp = '-.... ';
                break;
            case "7":
                temp = '--... ';
                break;
            case "8":
                temp = '---.. ';
                break;
            case "9":
                temp = '----. ';
                break;
            case "0":
                temp = '----- ';
                break;
            case "&":
                temp = '.-... ';
                break;
            case "'":
                temp = '.----. ';
                break;
            case "@":
                temp = '.--.-. ';
                break;
            case ")":
                temp = '-.--.- ';
                break;
            case "(":
                temp = '-.--. ';
                break;
            case ":":
                temp = '---... ';
                break;
            case ",":
                temp = '--..-- ';
                break;
            case "=":
                temp = '-...- ';
                break;
            case "!":
                temp = '-.-.-- ';
                break;
            case ".":
                temp = '.-.-.- ';
                break;
            case "-":
                temp = '-....- ';
                break;
            case "+":
                temp = '.-.-. ';
                break;
            case "\"":
                temp = '.-..-. ';
                break;
            case "?":
                temp = '..--.. ';
                break;
            case "/":
                temp = '-..-. ';
                break;
            case " ":
                temp = '/ ';
                break;
            
            default:
                temp = elem;
                break;
        }
        encoded += temp;
    });
    
    return encoded;
}

function decodeMorse(str) {
     var decoded = '';

     var words = str.trim().split("/");
     
     words.forEach(element => {
         
         var letters = element.trim().split(" "), temp = '', word = '';
         letters.forEach(elem => {
            switch(elem){
                case ".-":
                    temp = 'a';
                    break;
                case "-...":
                    temp = 'b';
                    break;
                case "-.-.":
                    temp = 'c';
                    break;
                case "-..":
                    temp = 'd';
                    break;
                case ".":
                    temp = 'e';
                    break;
                case "..-.":
                    temp = 'f';
                    break;
                case "--.":
                    temp = 'g';
                    break;
                case "....":
                    temp = 'h';
                    break;
                case "..":
                    temp = 'i';
                    break;
                case ".---":
                    temp = 'j';
                    break;
                case "-.-":
                    temp = 'k';
                    break;
                case ".-..":
                    temp = 'l';
                    break;
                case "--":
                    temp = 'm';
                    break;
                case "-.":
                    temp = 'n';
                    break;
                case "---":
                    temp = 'o';
                    break;
                case ".--.":
                    temp = 'p';
                    break;
                case "--.-":
                    temp = 'q';
                    break;
                case ".-.":
                    temp = 'r';
                    break;
                case "...":
                    temp = 's';
                    break;
                case "-":
                    temp = 't';
                    break;
                case "..-":
                    temp = 'u';
                    break;
                case "...-":
                    temp = 'v';
                    break;
                case ".--":
                    temp = 'w';
                    break;
                case "-..-":
                    temp = 'x';
                    break;
                case "-.--":
                    temp = 'y';
                    break;
                case "--..":
                    temp = 'z';
                    break;
                case ".----":
                    temp = '1';
                    break;
                case "..---":
                    temp = '2';
                    break;
                case "...--":
                    temp = '3';
                    break;
                case "....-":
                    temp = '4';
                    break;
                case ".....":
                    temp = '5';
                    break;
                case "-....":
                    temp = '6';
                    break;
                case "--...":
                    temp = '7';
                    break;
                case "---..":
                    temp = '8';
                    break;
                case "----.":
                    temp = '9';
                    break;
                case "-----":
                    temp = '0';
                    break;
                case "--..--":
                    temp = ',';
                    break;
                case ".-.-.-":
                    temp = '.';
                    break;
                case "---...":
                    temp = ':';
                    break;
                case "-..-.":
                    temp = '/';
                    break;
                case "-...-":
                    temp = '=';
                    break;
                case ".-.-.":
                    temp = '+';
                    break;
                case "-....-":
                    temp = '-';
                    break;
                case "-.--.":
                    temp = '(';
                    break;
                case "-.--.-":
                    temp = ')';
                    break;
                case ".----.":
                    temp = '\'';
                    break;
               case ".-...":
                   temp = '& ';
                   break;
               case ".--.-.":
                   temp = '@ ';
                   break;
               case "-.-.--":
                   temp = '! ';
                   break;
                case " ":
                    temp = '';
                    break;
   
                default:
                    temp = elem;
                    break;
            }
            word += temp ;
         });
     decoded += word + " ";
    });
    return decoded;
}

// encodeMorse("Abcdefghijklmnopqrstuvwxyz1234567890");
// decodeMorse(".. / .-.. --- ...- . / -.-- --- ..-");



//---binary code---

function encodeBinary(str, spaceSeparatedOctets) {
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? str : str + " "
    });
};

function decodeBinary(str) {
    // Removes the spaces from the binary string
    str = str.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    str = str.match(/.{1,8}/g).join(" ");

    var newBinary = str.split(" ");
    var binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    
    return binaryCode.join("");
}

// console.log(encodeBinary("hi there how are you"));
// decodeBinary("01101000 01101001 00100000 01110100 01101000 01100101 01110010 01100101 00100000 01101000 01101111 01110111 00100000 01100001 01110010 01100101 00100000 01111001 01101111 01110101 ");


//---Ascii code---

function encodeAscii(str) {
    var encoded = '', item = '';
    var text = Array.from(str.toLowerCase());

    text.forEach(elem => {
        item = elem.charCodeAt(0);
        encoded += item + " ";
    });
    // console.log(encoded);
    
    return encoded;
}

function decodeAscii(str) {
    var decoded = '', item = '';
    var text = Array.from(str.trim().split(" "));
    
    text.forEach(elem => {
        var elemNum = Number(elem); 
        item = String.fromCharCode(elemNum);
        decoded += item;
    });
    
    return decoded;
}

// encodeAscii("Hello there"); 
// decodeAscii("104 101 108 108 111 32 116 104 101 114 101 ");


//---GibberText Code ---

function encodeGibberText(str) {
    var encoded = '',temp='';
    var text = Array.from(str.toLowerCase());
    text.forEach(elem => {
        
        switch (elem) {
            case "a":
                temp = 'bhs';
                break;
            case "b":
                temp = 'ast';
                break;
            case "c":
                temp = 'dty';
                break;
            case "d":
                temp ='hry';
                break;
            case "e":
                temp = 'smo';
                break;
            case "f":
                temp = 'qiz';
                break;
            case "g":
                temp = 'lwp';
                break;
            case "h":
                temp = 'nhe';
                break;
            case "i":
                temp = 'cvu';
                break;
            case "j":
                temp = 'xci';
                break;
            case "k":
                temp = 'zko';
                break;
            case "l":
                temp = 'ndt';
                break;
            case "m":
                temp = 'nfr';
                break;
            case "n":
                temp = 'ply';
                break;
            case "o":
                temp = 'twp';
                break;
            case "p":
                temp = 'vho';
                break;
            case "q":
                temp = 'dfi';
                break;
            case "r":
                temp = 'qar';
                break;
            case "s":
                temp = 'sar';
                break;
            case "t":
                temp = 'lmr';
                break;
            case "u":
                temp = 'vht';
                break;
            case "v":
                temp = 'hil';
                break;
            case "w":
                temp = 'tyu';
                break;
            case "x":
                temp = 'nyt';
                break;
            case "y":
                temp = 'poi';
                break;
            case "z":
                temp = 'moi';
                break;
            case "1":
                temp = 'awt';
                break;
            case "2":
                temp = 'ghy';
                break;
            case "3":
                temp = 'dft';
                break;
            case "4":
                temp = '#ht';
                break;
            case "5":
                temp = '&pq';
                break;
            case "6":
                temp = 'tri';
                break;
            case "7":
                temp = 'pit';
                break;
            case "8":
                temp = 'lio';
                break;
            case "9":
                temp = 'pii';
                break;
            case "0":
                temp = 'bio';
                break;
            case ",":
                temp = '@gu';
                break;
            case ".":
                temp = 'lha';
                break;
            case ":":
                temp = 'pjo';
                break;
            case ";":
                temp = 'mli';
                break;
            case "/":
                temp = 'pqe';
                break;
            case "=":
                temp = 'tik';
                break;
            case "+":
                temp = '&bg';
                break;
            case "-":
                temp = '$iu';
                break;
            case "_":
                temp = 'grt';
                break;
            case "(":
                temp = 'pla';
                break;
            case ")":
                temp = 'ftb';
                break;
            case "{":
                temp = 'tyg';
                break;
            case "}":
                temp = 'mnb';
                break;
            case "[":
                temp = 'plm';
                break;
            case "]":
                temp = 'qaz';
                break;
            case "\"":
                temp = 'wsx';
                break;
            case "\'":
                temp = 'edc';
                break;
            case "\\":
                temp = 'rfv';
                break;
            case "&":
                temp = 'tgb';
                break;
            case "@":
                temp = 'yhn';
                break;
            case "!":
                temp = 'ujm';
                break;
            case " ":
                temp = 'bgt';
                break;
            default:
                temp = elem;
                break;
        }
        encoded += temp;
    });
    
    return encoded;
}

function decodeGibberText(str) {
    var decoded = '', item = ',';
    // Removes the spaces from the binary string
    str = str.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    str = str.match(/.{1,3}/g).join(" ");
    var text = Array.from(str.trim().split(" "));
    
    text.forEach(elem => {
        
        switch(elem){
            case "bhs":
                temp = 'a';
                break;
            case "ast":
                temp = 'b';
                break;
            case "dty":
                temp = 'c';
                break;
            case "hry":
                temp = 'd';
                break;
            case "smo":
                temp = 'e';
                break;
            case "qiz":
                temp = 'f';
                break;
            case "lwp":
                temp = 'g';
                break;
            case "nhe":
                temp = 'h';
                break;
            case "cvu":
                temp = 'i';
                break;
            case "xci":
                temp = 'j';
                break;
            case "zko":
                temp = 'k';
                break;
            case "ndt":
                temp = 'l';
                break;
            case "nfr":
                temp = 'm';
                break;
            case "ply":
                temp = 'n';
                break;
            case "twp":
                temp = 'o';
                break;
            case "vho":
                temp = 'p';
                break;
            case "dfi":
                temp = 'q';
                break;
            case "qar":
                temp = 'r';
                break;
            case "sar":
                temp = 's';
                break;
            case "lmr":
                temp = 't';
                break;
            case "vht":
                temp = 'u';
                break;
            case "hil":
                temp = 'v';
                break;
            case "tyu":
                temp = 'w';
                break;
            case "nyt":
                temp = 'x';
                break;
            case "poi":
                temp = 'y';
                break;
            case "moi":
                temp = 'z';
                break;
            case "awt":
                temp = '1';
                break;
            case "ghy":
                temp = '2';
                break;
            case "dft":
                temp = '3';
                break;
            case "#ht":
                temp = '4';
                break;
            case "&pq":
                temp = '5';
                break;
            case "tri":
                temp = '6';
                break;
            case "pit":
                temp = '7';
                break;
            case "lio":
                temp = '8';
                break;
            case "pii":
                temp = '9';
                break;
            case "bio":
                temp = '0';
                break;
            case "@gu":
                temp = ',';
                break;
            case "lha":
                temp = '.';
                break;
            case "pjo":
                temp = ':';
                break;
            case "mli":
                temp = ';';
                break;
            case "pqe":
                temp = '/';
                break;
            case "tik":
                temp = '=';
                break;
            case "&bg":
                temp = '+';
                break;
            case "$iu":
                temp = '-';
                break;
            case "grt":
                temp = '_';
                break;
            case "pla":
                temp = '(';
                break;
            case "ftb":
                temp = ')';
                break;
            case "tyg":
                temp = '{';
                break;
            case "mnb":
                temp = '}';
                break;
            case "plm":
                temp = '[';
                break;
            case "qaz":
                temp = ']';
                break;
            case "wsx":
                temp = '\"';
                break;
            case "edc":
                temp = '\'';
                break;
            case "rfv":
                temp = '\\';
                break;
           case "tgb":
               temp = '&';
               break;
           case "yhn":
               temp = '@';
               break;
           case "ujm":
               temp = '!';
               break;
            case "bgt":
                temp = ' ';
                break;

            default:
                temp = elem;
                break;
        }
        decoded += temp;
    });

    return decoded;
}


//--------------------------------------------------------------

//if clicked on lets go
letsGo.addEventListener('click', next);
function next() {
    start.classList.add('invisible');
    type.classList.remove('invisible');
}

//if clicked on go 
typeBtn.addEventListener('click', typeNext);
function typeNext() {
    const choice = select.value;
    console.log(choice);
    
    if (choice == 1) {
        CBinary();
    }else if (choice == 2) {
        binary();
    }else if (choice == 3) {
        gibberText();
    }else if (choice == 4) {
        morse();
    }else if (choice == 5) {
        ascii();
    }
    
}
//if clicked on go back
function goback(){
    goBack.addEventListener('click', () => {
        container.classList.add('invisible');
        type.classList.remove('invisible');
        
        encodeArea.value = '';
        decodeArea.value = '';
    });
}

function onCopy(val){
    var temp = val;
    temp.select();
    temp.focus();
    document.execCommand("copy");
};



//cbinary
function CBinary(){
    type.classList.add('invisible');
    container.classList.remove('invisible');

    h4.innerHTML = "Custom Binary Encoder/Decoder";
    //paste btn

    encode.addEventListener('click', () => {
        var text = encodeArea.value;
        // console.log(text);
        var encodedText = encodeCBinary(text);
        // console.log(encodedText);

        decodeArea.value = encodedText;
        
    })
    decode.addEventListener('click', () => {
        var text = decodeArea.value;
        // console.log(text);
        var decodedText = decodeCBinary(text);
        // console.log(encodedText);

        encodeArea.value = decodedText;
        
    })
    goback();
    copyEn.addEventListener('click', ()=>{
          onCopy(encodeArea);
    });
    copyDe.addEventListener('click', ()=>{
          onCopy(decodeArea);
    });
 
    //clear text
    clearEn.addEventListener('click', () => encodeArea.value = '');
    clearDe.addEventListener('click', () => decodeArea.value = '');

}

//binary
function binary(){
    type.classList.add('invisible');
    container.classList.remove('invisible');

    h4.innerHTML = "Binary Encoder/Decoder";

    encode.addEventListener('click', () => {
        var text = encodeArea.value;
        var encodedText = encodeBinary(text);

        decodeArea.value = encodedText;
    })
    decode.addEventListener('click', () => {
        var text = decodeArea.value;
        var decodedText = decodeBinary(text);

        encodeArea.value = decodedText;
        
    })
    goback();
    copyEn.addEventListener('click', ()=>{
        onCopy(encodeArea);
    });
    copyDe.addEventListener('click', ()=>{
          onCopy(decodeArea);
    });
    
    //clear text
    clearEn.addEventListener('click', () => encodeArea.value = '');
    clearDe.addEventListener('click', () => decodeArea.value = '');
}

//GibberText
function gibberText(){
    type.classList.add('invisible');
    container.classList.remove('invisible');

    h4.innerHTML = "GibberText Encoder/Decoder";

    encode.addEventListener('click', () => {
        var text = encodeArea.value;
        var encodedText = encodeGibberText(text);

        decodeArea.value = encodedText;
    })
    decode.addEventListener('click', () => {
        var text = decodeArea.value;
        var decodedText = decodeGibberText(text);

        encodeArea.value = decodedText;
        
    })
    goback();
    copyEn.addEventListener('click', ()=>{
        onCopy(encodeArea);
    });
    copyDe.addEventListener('click', ()=>{
          onCopy(decodeArea);
    });

    //clear text
    clearEn.addEventListener('click', () => encodeArea.value = '');
    clearDe.addEventListener('click', () => decodeArea.value = '');
}

//Morse 
function morse(){
    type.classList.add('invisible');
    container.classList.remove('invisible');

    h4.innerHTML = "Morse Encoder/Decoder";

    encode.addEventListener('click', () => {
        var text = encodeArea.value;
        var encodedText = encodeMorse(text);

        decodeArea.value = encodedText;
    })
    decode.addEventListener('click', () => {
        var text = decodeArea.value;
        var decodedText = decodeMorse(text);

        encodeArea.value = decodedText;
        
    })
    goback();
    copyEn.addEventListener('click', ()=>{
        onCopy(encodeArea);
    });
    copyDe.addEventListener('click', ()=>{
          onCopy(decodeArea);
    });

    //clear text
    clearEn.addEventListener('click', () => encodeArea.value = '');
    clearDe.addEventListener('click', () => decodeArea.value = '');
}

//ASCII 
function ascii(){
    type.classList.add('invisible');
    container.classList.remove('invisible');

    h4.innerHTML = "ASCII Encoder/Decoder";

    encode.addEventListener('click', () => {
        var text = encodeArea.value;
        var encodedText = encodeAscii(text);

        decodeArea.value = encodedText;
    })
    decode.addEventListener('click', () => {
        var text = decodeArea.value;
        var decodedText = decodeAscii(text);

        encodeArea.value = decodedText;
        
    })
    goback();
    copyEn.addEventListener('click', ()=>{
        onCopy(encodeArea);
    });
    copyDe.addEventListener('click', ()=>{
          onCopy(decodeArea);
    });

    //clear text
    clearEn.addEventListener('click', () => encodeArea.value = '');
    clearDe.addEventListener('click', () => decodeArea.value = '');
}
