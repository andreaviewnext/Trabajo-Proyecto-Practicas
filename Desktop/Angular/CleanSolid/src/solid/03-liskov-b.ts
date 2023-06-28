
//LAS SUBCLASES (TESLA,AUDI...) TENGAN LAS MISMAS PROPIEDADES QUE LA CLASE ABSTRACTA
export abstract class Vehicle {

    abstract getNumberOfSeats(): number;

}

export class Tesla extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Cupra extends Vehicle {

    constructor(private numberOfSeats: number) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}