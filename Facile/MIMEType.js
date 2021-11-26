/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
let mimeType =[]
let extension = ""
let answer = "UNKNOWN"
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    /*const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    mimeType.push([EXT.toLowerCase(), MT])*/
    mimeType[inputs[0].toLowerCase()] = inputs[1]
}
console.error(mimeType)
for (let i = 0; i < Q; i++) {
    const FNAME = readline().toLowerCase(); // One file name per line.
    console.error('FFFFFFFFF', FNAME)
    if (!FNAME.includes('.')) {
        extension=""
        answer="UNKNOWN"
        //console.log('XX', extension)
    }
    else {
        let arrayOfStrings = FNAME.lastIndexOf('.');
    extension = FNAME.substring(arrayOfStrings+1)
    //let extension = FNAME.split('.');
    console.error('XX', extension)
    console.error('MMM', mimeType[extension])
    if (extension && mimeType[extension]) {
        answer = mimeType[extension]
    } else answer = "UNKNOWN"
    }
    
    console.log(answer)
}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
