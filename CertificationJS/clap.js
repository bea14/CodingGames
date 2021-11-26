/*
les joueurs annoncent les chiffres de 1 à n chacun leur tout
Si 
- le nb est divisible par 7
- le nombre contient 7
- la somme des chiffres vaut 7 
il faut dire CLAP
Si oubli de dire CLAP?
*/

let N
let true_flag = false
let sum = 0
for (let i = 1; i <=N; i++){
    sum = Math.floor(i / 10) + (i % 10)
    for (let j = 0; j < i.length; j++){
        if (i[j] == 7) true_flag = true
    }
    if (N % 7 == 0 || sum == 7 || true_flag){
        answer = 'CLAP' )
    } else answer = i
} 
    