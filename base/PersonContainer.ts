import { Person } from "./Person";

export class PersonContainer {
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