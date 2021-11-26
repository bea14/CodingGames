/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let toX = "";
    let toY = "";

    if (initialTx > lightX) {
        toX = "W";
        initialTx = initialTx - 1;
    } else if (initialTx < lightX) {
         toX = "E";
        initialTx = initialTx + 1;
    } else if (initialTx = lightX) {
        toX = ""
        initialTx = initialTx
    }
        
    if (initialTy > lightY) {
        toY = "N"
        initialTy = initialTy -1;
    } else if (initialTy < lightY) {
        toY = "S"
        initialTy = initialTy + 1;
    } else if (initialTy = lightY) {
        toY = ""
        initialTy = initialTy
    }
    
    console.log(toY+toX);
     
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    
}
