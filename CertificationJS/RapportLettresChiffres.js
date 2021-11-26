/*
nb lettre /nbdigit
*/
let s= string
let letter = 0
let digit = 0
let count = 0
for (let i = 0; i <  s.length; i++){
    if (isNaN(s[i]) || s[i]=="'" || s[i]=="'!" || s[i]=="?" || s[i]==";" || s[i]=="," || s[i]==".") {
        letter += 1
    } else digit += 1
    count = letter / digit
}
console.log(count)