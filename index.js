//create a person object
let person = {
    firstName: 'Ty',
    lastName: 'Menlove',
    age: 23
}

// console.log(person.firstName)
// console.log(person['lastName'])



//destructuring
let meal = {
 appetizer: 'chips and salsa',
 entree: 'steak and bean burrito',
 dessert: 'fried ice cream',
 drink: 'dr. pepper'
}

// let dessert = meal.dessert
// let {dessert} = meal

// let {entree, appetizer} = meal

// let {drink: bestSodaEver} = meal

// console.log(dessert, entree, appetizer)
// console.log(dessert, meal)


//For in loops
// for(let food in meal){
//     console.log(`For ${food} I had ${meal[food]}`)
// }


//adding and deleting properties
person.occupation = 'Student at Devmountain'
person.age--

delete person.lastName

// console.log(person)



//Classes and extending class
class Pet {
 constructor (name, age,){
    this.name = name,
    this.age = age
    
 }
}

// let luna = new Pet('Luna', 1, 'black')

// let peanut = new Pet ('Peanut', 8, "white")

// let buttercup = new Pet ('buttercup', 8, "brown and black")

// // console.log(peanut)
// console.log(luna)
// console.log(buttercup.age)


class Dog extends Pet {
    constructor(name, age, breed){
        super(name, age,)

        this.breed =breed
    }
    bark(){
        console.log(`Bark, my name is ${this.name}`)
    }
}

let luna = new Dog ('Luna', 1, "black", "terrier")

console.log(luna)
luna.bark()

class Cat extends Pet {
    constructor(name, age, color){
        super(name, age)
        this.color = color,
        this.temperment = 'mean'
    }

    beNice(){
        this.temperment = 'nice'
        console.log(`${this.name} is now a nice cat!`)
    }
}

let buttercup = new Cat('Buttercup', 8, 'Black and brown')

console.log(buttercup.temperment)
buttercup.beNice()