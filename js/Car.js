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
    this.tank=0;
    this.engineOn=false;
    this.engineOff=true;

    }
    intro() {
        return `This is ${this.color} ${this.model}.`;
    }
    refill(volume) {
        if (this.engineOn) {
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
    carEngineOn () {
    if (this.engineOff===true && this.tank!==0)    
        this.engineOn=true;
    else if (this.engineOff===false)
        this.engineOn=false;
    else return 'masina neuzsiveda, nes nera kuro';   
    }
}