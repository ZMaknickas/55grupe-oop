class animal {
constructor (name, age)
{
this.name=name;
this.age=age;
this.energy=40;
}
sleep () {
this.energy+=20;
return `${this.type} ${this.name} miega`;
}
feed () {
this.energy+=10;
return `${this.type} ${this.name} eda`;
}
labas () {
if (this.energy<5)
return `${this.name} negali pasisveikinti`;
else {
this.energy-=5;
return `Labas, mano vardas ${this.name}! As esu ${this.type}!
\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`;}
}    
birthday () {
this.age++;
return `Siandie ${this.name} valgys torta is ${this.wantedFood}.`;     
}
}

class monkey extends animal {
    constructor (name, age)
    {
    super (name, age);
    this.type="bezdzione";
    this.balsas="uh, uh, ah, ah, ah";
    this.wantedFood="bananai";
    }

triukas (a, b) {
if (this.energy<10) 
return "Rina nori miego";
this.energy-=10;   
if (a<=5 && b<=5){
return `${this.name} parode tiek pirstu----`+(a+b);
}
else {
return `${this.name} meta purva. Per dideli skaiciai.`;
}
}
}

class dramblys extends animal {
    constructor (name, age)
    {
    super (name, age);
    this.type="dramblys";
    this.balsas="Tooth, tooth";
    this.wantedFood="riesutai";
    }
triukas (temp) {
if (this.energy<10)
return 'Benas nori miego';
this.energy-=10;
if (temp==='sauleta') {
return 'Dramblys purskia vandeni, matosi vaivorykste.'
}
if (temp==='debesuota') {
return 'Dramblys purskia vandeni.'
}
if (temp==='salta'){
return 'Dramblys mus aplaiste, mums salta'    
}
}    
}

class pinguin extends animal {
    constructor (name, age)
    {
    super (name, age);
    this.type="pingvinas";
    this.balsas="Kri, kri";
    this.wantedFood="krevetes";    
    }
triukas (said) {   
if (this.energy<10)
return `${this.name} nori miego`;
if (said==='labas'|| said==='hello'|| said==='hi'){
this.energy-=5
return `Sveiki, mano vardas yra ${this.name}.` 
}
else {
this.energy-=10;    
return 'Pingvinas paploja ir pamojuoja.';
}
}
}

const pol=new pinguin("Pol", 2);
const rina=new monkey("Rina", 6);
const ben=new dramblys("Ben", 8);
console.log(pol);
console.log(pol.labas());
console.log(pol);
console.log(pol.triukas('hi'));
console.log(rina);
console.log(rina.triukas(3,4));
console.log(rina.labas());
console.log(ben);
console.log(ben.triukas('debesuota'));
console.log(ben.triukas('debesuota'));
console.log(ben.triukas('debesuota'));
console.log(ben);
console.log(ben.sleep());
console.log(ben);
console.log(rina);
console.log(rina.feed());
console.log(rina.sleep());
console.log(rina);
console.log(pol.birthday());
console.log(rina);
console.log(rina.sleep());
console.log(rina);
console.log(rina.labas());
console.log(rina.triukas(2,2));
