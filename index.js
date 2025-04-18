// class (klase)-> object (objektas)
// blyno receptura -> blynas (valgomas)
// namo planas -> namas

class Dog {
    constructor (vardas, furColor) {
        this.name = vardas;
        this.furColor=furColor;
        this.age= 0;
        this.legsCount= 4;
        this.hasTail=true;
        this.isStanding=true;
    }
    hi () {
       return `Hi, my name is ${this.name}!`; 
    }
    birthday (){
        this.age++;
        return `Happy birthday ${this.name}! Now you are
        ${++this.age} years old`
    }
    LostTail() {
        this.hasTail = false;
    }
    lostLeg() {
       if (this.legsCount>0)
        this.legsCount--;
    }
    changePose() {
        this.isStanding=!this.isStanding;
    }
}
const rex = new Dog('Rex','black');
const brisius = new Dog('Brisius', 'white');


brisius.LostTail();
console.log(brisius);
rex.LostTail();
console.log(rex);
brisius.lostLeg();
brisius.lostLeg();
brisius.lostLeg();
console.log(brisius);
brisius.changePose();
brisius.changePose();



console.log(rex.name);
console.log('---------');
console.log(brisius.age);
console.log('---------');
console.log(brisius.furColor);
console.log('---------');
console.log(brisius.legsCount);
console.log('zzzzzzzzzz');

console.log(rex.hi());
console.log('----------');


console.log(brisius.birthday());
console.log('22222222222222222222');
console.log(rex.birthday());
console.log('rrrrrrrrrrrrrrrrrrrr');
console.log(rex.birthday());

