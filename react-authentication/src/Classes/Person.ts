export default class Person {
    private firstName: string;
    private lastName: string;
    
    constructor(fn: string, ln: string) {
        this.firstName = fn;
        this.lastName = ln;
    }

    sayHello() {
        alert("Hello there " + this.firstName + " " + this.lastName + "!");
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }
}