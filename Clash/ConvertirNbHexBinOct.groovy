<<PROMPT>>
You start with a number n and a string of COMMANDS (message)

<<COMMANDS>>
+: adds 1 to n
-: subtracts 1 from n
H: outputs the hexadecimal representation of n
B: outputs the binary representation of n
O: outputs the octal representation of n

<<NOTE>>
If nothing is outputted during the whole process, output n
Entrée
n
message
Sortie
n or hex, oct, bin


n = int(input())  
m = input() 

t = n
for c in m:
    if c == '+':
        t +=1
    elif c == '-':
        t-=1
    elif c == 'H':
        print(str(hex(t))[2:])
    elif c == 'B':
        print(str(bin(t))[2:])
    elif c == 'O':
        print(str(oct(t))[2:])
    else:
        print(n)


        
let n = parseInt(readline()); // a number, 0 < [[n]] < 100,000
const message = readline(); // composed of only "+", "-", "H", "B", "O". 0 < [[Length of message]] < 190

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

for (i=0; i<message.length;i++){
    if (message[i] == "+") {
        n = parseInt(n)+1
    }
    if (message[i] == "-") {
        n = parseInt(n)-1
    }
     if (message[i] == "H") {
        n = parseInt(n).toString(16)
    }
     if (message[i] == "B") {
        n = parseInt(n).toString(2) 
    }
     if (message[i] == "O") {
        n = parseInt(n).toString(8)
    }
console.log(message[i])
console.log(n)
}
// If there is no "H" or "B" or "O" print [[n]] (changed)
console.log(n);