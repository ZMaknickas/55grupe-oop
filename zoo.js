// zoo sodas su liutais, pingvinais ir flamingais;
// name, age, alkis, rusis

class animal {
    constructor (name, age)
    {
    this.name=name;
    this.age=age;
    this.legCount=0;
    this.isHungry=true;
    this.species="unknown";
    }

feed() {
    if (this.isHungry===true) 
    {    
    this.isHungry=false;
    return 'Aciu uz pietus';
    }
    else 
    {
    return 'Valgyt nenoriu';
    }
}
}

class Lion extends animal {
    constructor (name, age)
    {
     super (name, age);
     this.legCount=4;  
     this.species="liutas";
     this.wantedFood="meat";
    }

}
class Penguin extends animal {
    constructor (name, age)
    {
     super (name, age);
     this.wingCount=2;  
     this.species="pingvinas";
     this.wantedFood="fish";
    }

}


const simba=new Lion ('Simba', 4);
console.log(simba);
console.log(simba.isHungry);
simba.feed();
console.log(simba.isHungry);
simba.feed();
console.log(simba.isHungry);
simba.feed();


const kowalski= new Penguin ('Kowalski', 10);
console.log(kowalski.wingCount)

const zoo=[kowalski, simba, new Lion("Puma",8)];
console.log('----------');
console.log(zoo);

function oldestAnimal(animals) {
let animal;
let maxAmzius=0;
for (const i in animals) {
    if (animals[i].age>maxAmzius) 
    {
    animal=animals[i].name;
    maxAmzius=animals[i].age;
    }
}
return animal;
}
console.log(oldestAnimal(zoo));


class Flamingo extends animal {
    constructor (name, age)
    {
     super (name, age);
     this.wingCount=2;  
     this.species="bird";
    }
}
