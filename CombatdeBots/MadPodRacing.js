while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    const opponentX = parseInt(inputs[0]);
    const opponentY = parseInt(inputs[1]);
    var boostUse =  1
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90) {
        thurst = 0
    } else if (boostUse != 0) {
        thurst = 'BOOST'
        boostUse = 0;
    } else thurst = 100

    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    console.log(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thurst);
}
