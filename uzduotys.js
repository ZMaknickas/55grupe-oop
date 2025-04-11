

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