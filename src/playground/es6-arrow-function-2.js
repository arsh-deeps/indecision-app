// argument object is no longer bound


const add = (x,y) => {
//    console.log(arguments); //gives error
    return x+y;
};

console.log(add(34,33));

//this keyword is no longer bound

const user = {
    name: 'Arsh',
    cities: ['Mukerian','Dasuya','Jalandhar'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [2,6,3,9],
    multiplyBy : 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());