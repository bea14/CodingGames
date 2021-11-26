/*
Objectif
Given a list of N numbers, either 1 or 0, you need to output the result of XORing over the list. To do so, you have to XOR all the elements two by two, starting at the beginning.



For example:

1 0 1 0 0 -> 1 1 0 0 -> 0 0 0 -> 0 0 -> 0
Entrée
Line 1: The number N of elements in the list.

Line 2: A list of 1 and 0.
Sortie
Line 1: Either 1 or 0 , the result of XORing over the list.
Contraintes
1 ≤ N ≤ 10000
*/

const N = parseInt(readline());
var inputs = readline().split(' ');
let tab =[]
let n = ""
let answer=""
for (let i = 0; i < N; i++) {
    const X = parseInt(inputs[i]);
    tab += X
}
function myXOR(a,b) {
  return ( a ? 1 : 0 ) ^ ( b ? 1 : 0 );
}
n.length = N
for (let i = 0; i < n.length; i++) {
    n += myXOR(tab[i], tab[i+1])
    n.length = (n.length)-1
    if (n.length == 1) { answer = n}
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);


////////////Ne fonctionne pas entièrement