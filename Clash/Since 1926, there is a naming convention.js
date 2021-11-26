Since 1926, there is a naming convention for pedigree dogs in France. All dogs registered to the SCC (Société Centrale Canine) must have a name beginning by the letter of the year (table of reference below).

From a list of dog names, indicate all the years of birth for those dogs, and how many dogs were born each year.

| A | 2005 | F | 2010 | L | 2015 | R | 2020 |
| B | 2006 | G | 2011 | M | 2016 | S | 2021 |
| C | 2007 | H | 2012 | N | 2017 | T | 2022 |
| D | 2008 | I | 2013 | O | 2018 | U | 2003 |
| E | 2009 | J | 2014 | P | 2019 | V | 2004 |


Entrée
Line 1 : An integer N for the number of dogs in the list.
Next N lines : A string name containing a dog's name.
Sortie
A line for every year of dog birth, ordered chronologically, with the year from 2003 to 2022 and the number of dogs born this year, separated by a single space :
year number
Contraintes
2 ≤ N ≤ 100
Every name begins with a letter different from: K, Q, W, X, Y, Z.
2003 ≤ year ≤ 2022
Exemple
Entrée

6
Olaf
Sirius
Oberon
Orion
Buster
Sam

Sortie

2006 1
2018 3
2021 2

const N = parseInt(readline());
let nb = 0;
let year =""
for (let i = 0; i < N; i++) {
    const name = readline();
    let firstLetter = name[0]
    let firstLetterAscii=firstLetter.charCodeAt();
    for (i=65; i<91;i++) {
        if (firstLetterAscii == i) {
            nb++;
        }
        if (firstLetterAscii == i) {
            year = 2003 + i
        } 
        answer += year + " " +nb
        }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);