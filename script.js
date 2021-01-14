"use strict";
//Declare an interface called Car that contains the following properties:
;
//Declare an array called dealership which is of type Car array
const dealership = [
    { make: 'Toyota', model: 'Prius', year: 2020, hybrid: true },
    { make: 'Toyota', model: 'Prius', year: 2021, hybrid: true },
    { make: 'Ford', model: 'F-150', year: 2015, hybrid: false },
    { make: 'Ferrari', model: 'Enzo', year: 2004, hybrid: false },
];
//console.log(cars)
// Declare a function named findCars
// ○ Parameter(s): arrayOfCars (type Car array), model (type string)
// ○ Return type: Car array
// ○ Functionality: When called, this function will return an array of all the cars from
// the arrayOfCars argument that have the specified model argument. If there are
// no cars that have that model, return an empty array.
function findCars(arrayOfCars, model) {
    return arrayOfCars.filter(car => {
        car.model === model;
    });
    // Declare a function named addCar
    // ○ Parameter(s): arrayOfCars (type Car array), make (type string), model (type
    // string), year (type number), hybrid (type boolean)
    // ○ Return type: void
    // ○ Functionality: construct an object of type Car and push it into arrayOfCars
}
function addCar(arrayOfCars, model, make, year, hybrid) {
    arrayOfCars.push({ make, model, year, hybrid });
}
// Declare a function named areThereAnyHybridsForSale
// ○ Parameter(s): arrayOfCars (type Car array)
// ○ Return type: boolean
// ○ Functionality: when called, this function will return true if there is a hybrid car in
// the arrayOfCars argument and false otherwise.
function areThereAnyHybridsForSale(arrayOfCars) {
    for (let car of arrayOfCars) {
        if (car.hybrid) {
            return true;
        }
    }
    return false;
}
// Declare a function named expiredWarranty
// ○ Parameter(s): car (type Car)
// ○ Return type: boolean
// ○ Functionality: when called, this function will return true if the provided car has a
// year less than or equal to 2010 and false otherwise.
function expiredWarranty(car) {
    return car.year <= 2010;
}
