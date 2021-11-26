const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
let tab = ""
const Tup = T.toUpperCase()
const A  = "A".charCodeAt(0)
const Z  = 'Z'.charCodeAt(0)
let el = ""
let answer = ""
for (let i = 0; i < H; i++) {
    const ROW = readline();
    if (Tup.length == 1) {
        element = Tup
        el = element.charCodeAt(0)
       if (el < A || el > Z) {
       tab = ROW.substr(L * (Z-A+1), L)
       } else {tab = ROW.substr(L* (el-A),L)}
        answer = tab
       console.log(answer)
    } else {
        for (let j = 0; j < Tup.length; j++) {
        element = Tup[j]
        el = element.charCodeAt(0)
        if (el < A || el > Z) {
        tab = ROW.substr(L * (Z-A+1), L)
        } else {tab = ROW.substr(L* (el-A),L)}
        answer += tab
        }
      console.log(answer)
      answer=""
    } 
}