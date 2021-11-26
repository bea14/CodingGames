let N = parseInt(readline());

let minX = Infinity, maxX = 0, ys = [];
let minCable = 0;

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);

    maxX = Math.max(maxX, X);
    minX = Math.min(minX, X);

    ys.push(Y);
}

ys.sort((a, b) => a - b);

var m = N % 2 
    ? ys[N >> 1]
    : Math.floor((ys[(N >> 1) - 1] + ys[N >> 1]) / 2)

for (var i = 0; i < N; i++) {
    minCable+= Math.abs(ys[i] - m);
}

console.log(minCable + maxX - minX);