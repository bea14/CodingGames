 /** n : nb de lettres
 * inputs: tableau d'entree
 * index = ordre dans lequel on veut les lettres à la fin
 * exemple :
 * n=4
 * inputs = ['a','b','c','d']
 * index = 4321
 * on attend dcba
 **/

const n = parseInt(readline());
const line = readline();
var inputs = readline().split(' ');
    let result = ''
for (let i = 0; i < n; i++) {
    const index = parseInt(inputs[i]);
    result = result + line.charAt(index-1)
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);
