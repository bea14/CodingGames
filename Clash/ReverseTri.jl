
Le mode de jeu est REVERSE : Vous n'avez pas accès à l'énoncé. Vous devez trouver quoi faire en observant les jeux de tests suivants :
01
Test 1
Entrée
Sortie attendue

3
rat
ouu
bag

bag
rat
rob
rug
tub
tug

02
Test 2
Entrée
Sortie attendue

4
thus
oroa
oium
like

like
same
soil
thus
tool
true

03
Test 3
Entrée
Sortie attendue

5
chase
oruxv
uaahe
nczzr
today

chase
count
crazy
every
exact
today

04
Test 4
Entrée
Sortie attendue

6
pocket
llijhw
aterge
nfenmn
eaputt
thirty

planet
plenty
pocket
thirty
threat
twenty

05
Test 5
Entrée
Sortie attendue

7
profile
irprkxq
ccicayu
tijmjua
uhivafl
rniyarl
elderly

elderly
equally
examine
picture
primary
profile



n = int(input())
rows = []
for i in range(n):
    rows.append(input())
out = [rows[-1], rows[0], "".join(rows[i][0] for i in range(n)), "".join(rows[i][i] for i in range(n)),"".join(rows[i][n-i-1] for i in range(n)),"".join(rows[i][-1] for i in range(n))]
out = sorted(out)
for w in out:
    print(w)

    const N = parseInt(readline());
let tri =""
let answer=""
for (let i = 0; i < N; i++) {
    const ROW = readline();
    tri+= ROW+" "
}
for (let i = 0; i < tri.length; i++) {
    let op = tri.indexOf(" ")    
    answer[i] += tri.substring(0,op)
    console.log(answer[i])
}
console.log(answer)