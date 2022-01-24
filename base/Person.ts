export class Person {
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
