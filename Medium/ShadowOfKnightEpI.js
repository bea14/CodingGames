/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X = parseInt(inputs[0]);
let Y = parseInt(inputs[1]);
let X1 = 0;
let Y1 = 0;
let X2 = W -1;
let Y2 = H -1;

// game loop
while (true) {
    let bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    if (bombDir.includes("U")) {
        Y2 = Y - 1;
    } else  if (bombDir.includes("D")) {
        Y1 = Y + 1;
    }
    if (bombDir.includes("L")) {
        X2 = X - 1;
    } else  if (bombDir.includes("R")) {
        X1 = X + 1;
    }
    X = Math.round(X1 + (X2 - X1)/2);
    Y = Math.round(Y1 + (Y2 - Y1)/2);
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    // the location of the next window Batman should jump to.
    console.log(X + " " + Y);
}
