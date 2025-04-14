

//2 kiek kartu raide pasikartojo zodyje
function raide(text) {
let r=0;
for (let i=0; i<text.length; i++) {
    if (text[i]=== 'p')    
    r+=1}
return  r;
}
console.log(raide('pompastika'))


//3
function kartotinis(n) {
    let c=[];
    for (let i=3; i<=n; i+=3) {
    c.push(i)}
    return c;
 }
 console.log(kartotinis(50));
 
function reverse(text) {
    let x= 0;
    let result='';
    let y= text.length;
for (let i=1; i<y; i++)
   result=text[y-i]+result
return result;
}
console.log(reverse('saltis'));

//revese text
const apsuk = arr => arr.split('').reverse().join('');
console.log(apsuk('pastarnakas'));

//6Sukurk funkcija, kuri visus tarpus tekste pakeicia pabraukimais (underscore).
function pabr(list) {
  let x=list.replaceAll(' ','_');
    return x;
}
console.log(pabr('kievieno keleivio korteles galiojimas'));

function double(masyvas) {
    let x=[];
    for (let i=0; i<masyvas.length; i++) {
    x.push(masyvas[i]*2)}
    return x;
}
console.log(double([2,5,6]));

function ilg(sakinys) {
let word=0; 
let x= sakinys.split(" ");
let n=-Infinity;
    for (let i=0; i<x.length; i++) 
    if (x[i].length>n){
    n=x[i].length
    word= x[i]    
}
    return word;
} 
console.log(ilg('paprastas sakinys is zodziu'));

//10
const arr=[12, 17, 13, 2, 8, 14, 7, 21];
let x=0;
function div(arr) {
    for (const d of arr) {
        if (d%7===0);
        return x;   
    }   
};
console.log(div(arr));


//11
let j= []
function vard(arr) {
    for (const v of arr) {
        if (v.slice(0,1) === 'A')
    j.push(v);
    }
return j;
}
console.log(vard(['Petras', 'Algis', 'Ieva', 'Adomas']));

//12
const numbers = [2, 4, 6, 2, 4, 6, 7, 10, 5, 32, 5];
let r=[];
let i=0;
let l=0;


//13
let list=[2, 5, 8, 15, 18, 16, 19, 21, 23];
function int(a, b) {
    let r=[];
    let h=list.length;
    for (let i=0; i<h; i++) {
        if (list[i]>a && list[i]<b)
            r.push(list[i]) ;
    }
return r.sort();
}
console.log(int(15, 20));

//14 funkcija kuri is zodziu saraso grazintu
//tik tuos zodzius, kuriuose yra reide e.
function has(sar) {
    let r=[];
    let a=0;
    let x=sar.length;
 for (let i=0; i<x; i++) {
    if (sar[i].includes('e'))
    a=r.push(sar[i])  
    }            
return r;
} 
console.log(has(['stebimas', 'seleno', 'nuoviras']));