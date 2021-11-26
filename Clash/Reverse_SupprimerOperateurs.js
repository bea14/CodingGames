/*
MODE REVERSE
Suprimer les opearteurs
si multiplication supprimer le chiffre 2 places avant et le chiffre 2 places apres

*/

let S = readline();
let answer=""
console.error(isNaN(S[1]))
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
for (let i = 0; i < S.length; i++){
    if (!isNaN(S[i])) {
        console.error(S[i])
        answer += S[i]
    }
    /*if (S[i] == '*') {
        answer = answer.replace(S[i-2],'')
        S = S.replace(S[i+2],'')
    }*/
}
console.log(answer);