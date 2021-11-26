/*
N = nb d'entrees
s = place des etoiles
exemple
N = 2
S= 1 8
Résultat :
1:
2:*
3:
4:
5:
6:
7:
8:*
9:
*/

for (let i = 1; i <= S[N]+1; i++){
    if (S[i] == i) {
        answer = i + ':*'
    } else answer = i + ':'
}
console.log(answer)