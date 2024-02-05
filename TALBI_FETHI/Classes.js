class vehicle {
    constructor(name, fuelCapacity, fuelConsumption) { // Distance (KM)/ time(H)
        this.name = name;
        this.fuelCapacity = fuelCapacity; // (L)
        this.fuelConsumption = fuelConsumption; //(L per 100km)
    }

    // calculate Range
    calculateRange() {
        return (this.fuelCapacity / this.fuelConsumption) * 100;
    }

    static compareVehicle(vehicle1, vehicle2) {
        const range1 = vehicle1.calculateRange();
        const range2 = vehicle2.calculateRange();

        if (range1 > range2) {
            return `${vehicle1.name} has a longer range.`;
        } else if (range1 < range2) {
            return `${vehicle2.name} has a longer range.`;
        }

        return "Both vehicles have the same range.";
    }
}


const myVehicle1 = new vehicle('vehicle1', 20, 5);
const myVehicle2 = new vehicle('vehicle2', 30, 4);
console.log(`${myVehicle1.calculateRange()}KM`);
console.log(`${myVehicle2.calculateRange()}KM`);


class car extends vehicle {
    constructor(name, fuelCapacity, fuelConsumption, numberOfSeats) {
        super(name, fuelCapacity, fuelConsumption);
        this.numberOfSeats = numberOfSeats;
    }

    // Display info
    displayCarInfo() {
        const range = this.calculateRange();
        return `The range of this car is : ${range} kilometers. It has ${this.numberOfSeats} seats.`;
    }
}

const myCar = new car('myCar1', 30, 6, 4);
console.log(myCar.displayCarInfo());

// Compare vehicles
console.log(vehicle.compareVehicle(myVehicle1, myVehicle2));