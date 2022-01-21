import { Animal } from "./animal"

export class AnimalContainer {
    animals: Animal[]
    constructor() {
        this.animals = []
    }

    addAnimal(animal: Animal): void {
        this.animals.push(animal)
    }
}