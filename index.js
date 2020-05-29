// objects
//     Scooter constructor
//       1) should create a new scooter with three properties
//     Driver constructor
//       2) should create a new driver with three properties
//     PickupLocation constructor
//       3) should create a new PickupLocation with two properties

function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

function Driver(name, age, experience ){
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city){
    this.address = address;
    this.city = city;
}