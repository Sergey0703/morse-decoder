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
    // write your solution here
    let answ='';
    let words=expr.split('**********');
    for (let i=0; i<words.length; i++){
      //console.log('word=',words[i]);
      let letters=[];

      for (let ii = 0; ii < words[i].length; ii+=10) {
        letters.push(words[i].slice(ii, ii + 10));
    }

      for(let j=0;j<letters.length;j++){
          let char=letters[j].replace(/00/g,"");
          console.log('letter=',char);
          char=char.replace(/10/g,".");
          char=char.replace(/11/g,"-");
          
          let charW=MORSE_TABLE[char];
          //console.log('char=',char,' charW=',charW);
          answ=`${answ}${charW}`;
      }
          if(i<words.length-1){
            answ=`${answ} `;
          }
          //console.log(answ,i); 
    }
    return answ;
}

module.exports = {
    decode
}