
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Car implements Vehicle {
    constructor(public make: string, public model: string, public year: number) {
        this.make = make;
        this.model = model;
         this.year = year;   
    }

    start(): void {
        console.log("Car engine started");
    }
}


const myCar = new Car("Toyota", "Camry", 2022);


myCar.start();
