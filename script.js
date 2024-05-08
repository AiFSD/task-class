//! calculating uber price

const costPerKilometer = 20;

class UberPriceCalculator {
  constructor(costPerKilometer) {
    this.costPerKilometer = costPerKilometer;
  }

  calculatePrice(kilometers) {
    return kilometers * this.costPerKilometer;
  }
}

const uberCalculator = new UberPriceCalculator(costPerKilometer);
const kilometers = 10.8;
const price = uberCalculator.calculatePrice(kilometers);
console.log(`Total fare for ${kilometers} km: ₹${price}`);


//! class "person"


class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I am ${this.gender}.`);
  }
}


const person1 = new Person("Alice", 30, "female");
person1.introduce();

const person2 = new Person("Bob", 25, "male");
person2.introduce();
