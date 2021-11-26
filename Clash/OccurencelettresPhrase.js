//compter l'occurence des lettres dans une phrase
// afficher chaque lettre et le nb de fois où elle apparait

const string = readline();
let nb = 0
let answer =""
let lettre =""
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
long = string.length;
for (let j = 65;j<= 90; j++) {
    for (let i=0; i<long;i++) {
        lettre = string.toUpperCase()
        let toAscii = lettre.charCodeAt(i)
        if (toAscii == j) {
            nb++;
        }
answer += toAscii+ ":"+nb
    }

}
console.log(answer);

//reste à transformer le ascii en char