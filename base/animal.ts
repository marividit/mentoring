export class Animal{
    private name: string
    private age: number
    constructor(name: string, age?: number) {
        this.name = name
        this.age = age || 100
    }
        
    setName(name: string) {
        this.name = name
    }
    
    getName() {
        return this.name
    }

}