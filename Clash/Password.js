/*Storyline:
You work for a hacker and he wants you to find out bad passwords.

The Problem:
You must (in order) output whether a password is 'GOOD' or 'BAD' + reason.

Criterion of good passwords:
1. More than 15 characters
2. A mixture of uppercase and lowercase letters
3. More than 5 numbers

Notes:
If password is perfect output 'PERFECT'
If password isn't good print BAD + 3 or 2 or 1 based on input(ex. BAD 3)
If password has many bad reasons print all numbers in proper order(ex. BAD 2 3)
Entrée
num: Integer
password: String
Sortie
quality: String
Contraintes
0 < len(password) < 51
Exemple
Entrée

5
Mr.123456
Mr. Anonymous 123456
Bin110011
Mr. Anonymous forgot his numbers :(
1+2+3+4+5+6 Equals twenty-one!!!

Sortie

BAD 1
PERFECT
BAD 1
BAD 3
PERFECT

*/

const num = parseInt(readline());
let answer =''
console.error(num)
let lett = 0
let nb = 0
let upper = 0
let lower = 0
for (let i = 0; i < num; i++) {
    const password = readline();
    console.error(password)
    //on compte le nb de chiffres et on vérifie les majuscules et minuscules
    for (let j = 0; j < password.length; j++ ){
        //si pas un chiffre, on ajoute 1 lettre
        console.error('isNaN(passwor[j])',isNaN(password[j]))
        if (isNaN(password[j])){
            lett += 1
        }
        //nb = nb de chiffres
        nb = password.length - lett
        // majuscules
        if (password[j] == password[j].toUpperCase()){
            upper += 1
        }
         // minuscules
        if (password[j] == password[j].toLowerCase()){
            lower += 1
        }
    }
    if (nb > 5 && upper != 0 && lower != 0 && password.length > 15) answer = 'PERFECT'
    else {
        if (password.length <= 15) answer = "BAD 1 "
        if (upper == 0 || lower == 0) answer = "BAD 2 "
        if (nb <= 5) answer = "BAD 3 "
    }
    console.log(answer)
}