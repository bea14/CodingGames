/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
let nearest;

var inputs = readline().split(' ');
if (inputs == "") { 
    nearest = 0
} else {nearest = parseInt(inputs[0]);
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    
    if (Math.abs(t) == Math.abs(nearest)) {
        if (nearest < 0 && t < 0) {
            nearest = t
        } else {nearest = Math.abs(t)}
    }
    if (Math.abs(t) < Math.abs(nearest)){
        nearest = t
    } else nearest = nearest
    if (n == 1) {nearest = parseInt(inputs[0])}
}
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(nearest);