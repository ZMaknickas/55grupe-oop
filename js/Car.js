/*
intro- apibudina masinos modeli ir spalva
drive() -nurodzius norima nuvaziuoti atstuma paskaiciuojama degalu sanaudos
jei nepakanka degalu, tai ribiniu tiesiog sustoja ir masina issijungia.
engineOn() - ijungia varikli, jei yra kuro ir jei yra isjungtas.
engineOff() - issjungia varikli, jei yra ijungtas.
refill() - uzpilti degalu, bet ne daugiau nei telpa, jei varilklis yra isjungtas;
*/

export class Car {
    constructor(model, color, tankMax) {
    this.model=model;
    this.color=color;
    this.tankMax=tankMax;
    this.consump=5;
    this.tank=0;
    this.engineisOn=false;
    }

    intro() {
        return `This is ${this.color} ${this.model}.`;
    }
    refill(volume) {
        if (this.engineisOn) {
            return 'to refill a tank, you must turn Off the engine first';}
        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error: Only numbers allowed.';
        } if (volume<0){
            return `Refil with ${volume} litres is not allowed.`;
        } if (this.tankMax-this.tank>=volume) {
            this.tank+=volume;
        }else {
            this.tank=this.tankMax;
        }
    }
    carEngineOn() {
    if (this.engineIsOn===false && this.tank!==0) {    
        this.engineIsOn=true;
    }
    if (this.tank===0 ) {
    return 'Reikia ipilti kuro'}
    if (engineisOn===true) {
    return 'Masina neuzsiveda, nes jau uzvesta.';   
    }
}

    drive(dis) {
    if (this.tank===0) {
    return 'Reikia degalu.';}
    if (this.Tank*(100/this.consump)-dis<0) {
    this.engineisOn=true;
    return `masina nuvazious ${this.Tank*100/this.consump} km. ir nepasieks tikslo.`;}
    else {
        return `\nnuvaziuos norima atstuma`+dis;}
    }
}
