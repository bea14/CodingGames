let LON = readline();
let LAT = readline();
let d = 0;
let minName ="";
LON = LON.replace(',','.');
LAT = LAT.replace(',','.');
let LONRAD = LON * 2*Math.PI / 360;
let LATRAD = LAT * 2*Math.PI / 360;
let minDist = 1000;

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    let e = DEFIB.split(";");
    if (N == 1) {
        minName = e[1]
    } else {
let LONGD = e[4]
    let LATD = e[5]
    LONGD = LONGD.replace(',','.');
    LATD = LATD.replace(',','.');
    LONGDRAD = LONGD * 2*Math.PI / 360;
    LATDRAD = LATD * 2*Math.PI / 360; 
//X = (longB - longA)xcos((latA+latB)/2) en radians
posX = (LONRAD - LONGDRAD) * Math.cos((LATDRAD + LATRAD) / 2)
//Y = (latB - latA) en radians
posY = (LATRAD - LATDRAD)
// d = racine(x26+y2) x 6371, 6371 ets le rayon de la terre en km
d = Math.sqrt((posX * posX) + (posY * posY)) * 6371;
if (minDist > d) {
            minDist = d
            minName = e[1]
        }
    }
    
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(minName);