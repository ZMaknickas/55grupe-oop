import {Pet} from "./Pet.js";

export class Dog  extends Pet {
    constructor (name, furColor) {
    super(name, furColor);
    this.sound ='au';
    this.emoji= 'x';
    }
    voice() {
        const sound=(' '+this.sound).repeat(2);
        return `${this.name}`+sound;
    }
    }