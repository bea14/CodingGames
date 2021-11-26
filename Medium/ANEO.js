/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let speed = +parseInt(readline());
const lightCount = +parseInt(readline());
const lights = [];

for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
    const duration = parseInt(inputs[1]);
    lights.push(inputs.map(Number));
    const isRed = (speed, dist, dur) =>
    (18 * dist) % (10 * speed * dur) >= (5 * speed * dur);

    for(let j = 0; j < lightCount; j++) {
        if (isRed(speed, lights[j][0], lights[j][1])) {
            speed--; // Reduce speed
            j = -1; // Start again
            console.log(speed)
        }
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(speed);