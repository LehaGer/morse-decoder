const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let CurrLetterBin = "";
    let CurrLetterMorz = "";
    let Str = "";

    for(let i = 0; i < expr.length; i+=10){
        if(expr.substring(i,i+10) === "**********"){
            Str += " ";
        }else{
            CurrLetterBin = expr.substring(i,i+10).substring(expr.substring(i,i+10).indexOf("1"));
            for(let y = 0; y < CurrLetterBin.length; y += 2){
                if(CurrLetterBin.charAt(y) + CurrLetterBin.charAt(y+1) === "10")
                    CurrLetterMorz += ".";
                if(CurrLetterBin.charAt(y) + CurrLetterBin.charAt(y+1) === "11")
                    CurrLetterMorz += "-";
            }

            Str += MORSE_TABLE[CurrLetterMorz];
        }
        
        CurrLetterBin = "";
        CurrLetterMorz = "";
    }

    return Str;

}

module.exports = {
    decode
}