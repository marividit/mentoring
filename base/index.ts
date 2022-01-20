import { textSpanIntersection } from "typescript"

class Person {
    private name: string
    private age: number
    private isEmployee: boolean
    constructor(name: string, age?: number, isEmployee?: boolean) {
        this.name = name
        this.age = age || 20
        this.isEmployee = isEmployee || false
    }

    setName(name: string) {
        this.name = name
    }

    setAge(age: number) {
        this.age = age
    }

    setIsEmployee(isEmployee: boolean) {
        this.isEmployee = isEmployee
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getIsEmployee() {
        return this.isEmployee
    }


}


class PersonContainer {
    persons: Person[]
    constructor() {
        this.persons = []
    }

    addPerson(person: Person) {
        this.persons.push(person)
    }

    getAverageAge() {
        let averageAge = 0;
        for (let i = 0; i < this.persons.length; i++) {
            averageAge += this.persons[i].getAge()
        }
        return averageAge /= this.persons.length
    }

    getMaxAge() {
        let maxAge = 0;
        for (let i = 0; i < this.persons.length; i++) {
            let currentAge = this.persons[i].getAge()
            if (currentAge > maxAge) {
                maxAge = this.persons[i].getAge();
            }
        }
        return maxAge
    }

    getMinAge() {
        let minAge = Number.MAX_VALUE
        for (let i = 0; i < this.persons.length; i++) {
            let currAge = this.persons[i].getAge()
            if (currAge < minAge) {
                minAge = currAge;
            }
        }
        return minAge
    }

    getPersons() {
        return this.persons
    }

    getEmployees(){
       let employees = []
       for(let i = 0; i < this.persons.length; i++) {
           let person = this.persons[i]
           if(person.getIsEmployee()){
               employees.push(person)
           }

       }
       return employees
    }

}


let personContainer = new PersonContainer()

personContainer.addPerson(new Person("Nazar"))
personContainer.addPerson(new Person("Nazar1", 50, false))
personContainer.addPerson(new Person("Nazar2", 18, false))
personContainer.addPerson(new Person("Nazar3", 17, true))
personContainer.addPerson(new Person("Nazar4", 12, false))
personContainer.addPerson(new Person("Nazar5", 32, true))

// console.log(personContainer.getAverageAge())
// console.log(personContainer.getMaxAge())
console.log(personContainer.getMinAge())
console.log(personContainer)
// console.log(personContainer.getEmployees())

let employees = personContainer.getEmployees() 
