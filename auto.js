import {Car} /*ka pasiimame is failo */ from './js/Car.js'
//package.json pridedame  "type": "module" moduline sistema;
const volvo= new Car('Volvo S40','red',55);
const zapas=new Car('Zapas', 'white',35);
console.log(volvo.intro());
console.log(zapas.intro());
zapas.refill(-3);
zapas.refill(NaN);
zapas.refill(Infinity);
zapas.refill('pazadas uzpilti');
console.log(zapas.refill(-3));
zapas.refill(0)
console.log(zapas);
zapas.carEngineOn();
console.log(carEngineOn());