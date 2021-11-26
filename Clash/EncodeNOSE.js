/*A little while ago, my friend showed me a program that encoded a string into "NOSE" encryption. The program makes each letter in a string either the letter "N", "O", "S", or "E". The program decided what to replace each letter with like this:
Let's call the current letter's index in the alphabet "I" (a=1, b=2, c=3)
If "I" is divisible by 2, make the letter "N".
If "I" is divisible by 3 and not 2, make the letter "O".
If "I" is divisible by 5 and not 2 or 3, make the letter "S".
If "I" isn't divisible by 2, 3, or 5, make the letter "E".

Your Task:
Make a program that can encrypt a string into "NOSE" encryption.
You should encode spaces as spaces.

Note:
"NOSE" encryption is irreversible, so you won't be able to decrypt it.
Entrée
Line 1: The sentence to encode into "NOSE" Hash.
Sortie
A string containing the sentence, "NOSE" hashed.
Contraintes
s will always be lowercase.
s will only contain a-z characters and spaces.
Exemple
Entrée

easy peasy

Sortie

SEES NSEES*/

const s = readline();
let result =''
for (let i = 0; i< s.length; i++){
    char = s.charCodeAt(i)
    if (char == 32) result += ' '
    else {char = s.charCodeAt(i) - 96;
     if (char%2 == 0) result += 'N'
    else if (char %3 == 0) result += 'O'
    else if (char % 5 == 0) result += 'S'
    else result += 'E'
    }
    

}