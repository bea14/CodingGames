/*
un nombre est tall si un chiffre est supérieur au précedent
ex : 123 est tall car 3>2 et 2>1
*/
let true_flag = 0
let false_flag = 0
for (let i = (number.lenght-1); i > 0; i--){
    if (number[i+1]> number [i]) true_flag +=1
    else false_flag += 1
}
if (true_flag != 0) console.log('Nombre TALL')
if (false_flag != 0) console.log('Nombre NON TALL')