import Person from "./Person";

export default class Passenger extends Person {
    constructor(fn: string, ln: string) { 
        super(fn, ln);
    }

    sayHello() {
        alert("Hello there passenger! Hello " + this.getFirstName() + " " + this.getLastName() + "!");
    }
}