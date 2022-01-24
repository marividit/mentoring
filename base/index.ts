import { Animal } from "./animal"
import { AnimalContainer } from "./animalContainer"
import { Person } from "./Person"
import { PersonContainer } from './PersonContainer'

let personContainer = new PersonContainer()

personContainer.addPerson(new Person("Nazar"))
personContainer.addPerson(new Person("Nazar1", 50, false))
personContainer.addPerson(new Person("Nazar2", 18, false))
personContainer.addPerson(new Person("Nazar3", 17, true))
personContainer.addPerson(new Person("Nazar4", 12, false))
personContainer.addPerson(new Person("Nazar5", 32, true))

// console.log(personContainer.getAverageAge())
// console.log(personContainer.getMaxAge())
// console.log(personContainer.getMinAge())
// console.log(personContainer)
// console.log(personContainer.getEmployees())

// let employees = personContainer.getEmployees() 

let animalContainer = new AnimalContainer()

animalContainer.addAnimal(new Animal ("Cat"))
animalContainer.addAnimal(new Animal ("Tiger"))
console.log(animalContainer)
