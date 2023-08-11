/*
Part One:
Create a class for vehicle. Each vehicle instance should have the following properties:
    -Make
    -Model
    -Year
*/

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return 'Beep.';
  }

  toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

/*
Part Two:
Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.
*/

class Car extends Vehicle {
  //Car child inherits make,model,year from parent
  numWheels() {
    return 4;
  }
}

/*
Part Three:
Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”
*/

class Motorcycle extends Car {
  numWheels() {
    return 2;
  }

  revEngine() {
    return 'VROOM!!!';
  }
}

/*
Part Four:
Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage,vehicles will always be empty; you only need to provide the capacity.

A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is *not* a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”
*/

class Garage extends Motorcycle {
  constructor(capacity) {
    super(); //Access parent class' constructor values
    this.vehicles = [];
    this.capacity = capacity;
  }

  //add method adds vehicles to empty garage array
  add(newVehicle) {
    //instanceof tests to see if newVehicle is an instance of the vehicle class
    if (newVehicle instanceof Vehicle) {
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full!";
      }
      //If garage still has available capacity, add vehicle to the garage
      this.vehicles.push(newVehicle);
      return 'Vehicle added!';
    } else {
      return 'Only vehicles are allowed in here!';
    }
  }
}
