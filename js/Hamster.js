import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor (name, furColor) {
        super(name, furColor);

    }
voice() {
    return `${this.name}: krimst,krimst!`;
    }   
}