// s = un mot
// N = nb de mots
// x = N mots qui contiennent s
//But : afficher un mot final qui contient les mots x sans les s


const s = readline();
const N = parseInt(readline());
let word= "";
answertab=""; 
answer =""
for (let i = 0; i < N; i++) {
    const x = readline();
    word = x.replace(s,"");
    answertab+=word  
}
answer = answertab
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);