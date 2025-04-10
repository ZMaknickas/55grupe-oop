//2) Parašykite funkcija,
//   kuri parodytų kiek žmonių reikia norint pakelti 
//   tam tikro svorio krovinį, kai vienas žmogus gali pakelti x kg. 
//   Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali pakelti 2.4 kg

function numPeople(x, vieno) {
return Math.ceil(x/vieno);
}

console.log(numPeople(16, 10))

//3a
function floor(x) {
    let did25=0;
    let did2=0;
if (x%2===0)
    return did2=x/2;
else if (x>3 && x%2!==0)
    did25=(x-5)/2+2;
    return `${did25+did2}`;
}
console.log(floor(9));

// 3 b Statome nama iš plytu. Vienos plytos plotis yra 0.2 metrai, 
// o aukstis yra 0.1 metro. Parasykite funkcija, kuriai nurodžius namo 
// ismatavimus (plotis, ilgis, aukstis), ji apskaiciuotu
// kiek plytu reikes deti. (PVZ jei ilgis yra 1m, plotis 2m aukstis yra 2m, 
// turime dėti 600 plytu)

function plytos(p,i,a) {
    let plyta = 0.1*0.2;
    let plytu = (p*a+i*a)*2/plyta; 
    return `plytu skaicius `+Math.ceil(plytu);
}
console.log(plytos(1,2,2))

// 3 c) Statyti nama kainuoja. Kiekvienas namas turi 1 duris, x plytu ir 
// 6 langus kiekviename aukste. Padarykite funkcija, kuriai pateikus plytu, 
// langu ir duru kaina; bei namo ploti, ilgi ir aukšti - ji paskaičiuotu kiek 
// euru kainuotu pastatyti norima nama.
console.log('*\n3c uzdavinys');
function euru(pk, lk, dk, plo, ilg, x) {
let did25=0;
let k1=0;
let plytsk=(plo*x+ilg*x)*2/0.02;
console.log(plytsk)
if (x>3 && x%2!==0) 
{did25=(x-5)/2+2;
k1=(plytsk*pk+6*lk)*did25+dk;
}
return k1;
}
console.log(euru(0.25, 700, 400, 4, 4, 7));

console.log('*\n 4uzdavinys')
function geez(man) {
let metu=man+1;    
const r= Math.floor(Math.random()*4);
let poor =['kede', 'kede', 'sokoladas', 'petnesos', 'kochelas'];
let fancy=['kelione', 'Ferarri', 'butas', 'lektuvas', 'sraigtasparnis'];
const good =[1, 5, 10, 15, 16, 18, 20, 30, 40, 50, 60, 70, 80, 90];
let dovana = good.includes(metu) ? fancy[r] : poor[r];
return dovana;
}
console.log(geez(41));