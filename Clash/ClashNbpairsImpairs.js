//Si n pair on le divise par 2
// si n impair, on le multiplie par 3 et additionne 1 
// Trouver le nombre d'itéartions qui permettent d'arriver à 1

n = parseInt(number);
let nbIterations = 0;
while (n > 1) {
    if (n%2 == 0) {
    n = n/2
    } else {n = n*3 +1}
    nbIterations += 1
}
console.log(nbIterations+1)