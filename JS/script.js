// lager 3 arrays med dyr, farger og egenskaper
const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"]
const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"]
const traits = [
    "Vennlig", "Energisk", "Rolig", "Nysgjerrig", "Sky",
    "Leken", "Intelligent", "Trofast", "Uavhengig", "Sosial",
    "Snill", "Beskyttende", "Kjærlig", "Forsiktig", "Eventyrlysten",
    "Stille", "Lydig", "Utholdende", "Modig", "Tålmodig",
    "Morsom", "Aktiv", "Rolig", "Selvsikker", "Nervøs"
]

// lager en tom array for å lagre dyrene
let pets = []

// lager en funksjon som genererer et tilfeldig tall mellom min og max
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// lager en funksjon som genererer et tilfeldig tall mellom 0 og lengden til arrayen
const randomIndex = (array) => randomNumber(0, array.length - 1)

// lager en funksjon som legger til et gitt antall tilfeldige elementer fra en array til en annen array uten duplikater
function addMultipleUnique(array, items, amount) {
    for (let i = 0; i < amount; i++) {
        let item;
        do {
            item = items[randomIndex(items)];
        } while (array.includes(item));
        array.push(item);
    }
}

// lager en funksjon som genererer et dyr med tilfeldig farge, egenskaper og alder og legger det til pets arrayen
function generatePet() {
    animals.map(animal => {
        const pet = {
            animal: animal,
            color: colors[randomIndex(colors)],
            traits: [],
            age: randomNumber(1, 15)
        } 
        addMultipleUnique(pet.traits, traits, randomNumber(1, 4))
        pets.push(pet)
    }
)}

// kaller på funksjonen
generatePet()

// lager en funksjon som finner det første dyret
const findAnimal = (animal) => pets.find(pet => pet.animal === animal)

// lager en funksjon som finner det første dyret med en gitt farge
const findFirstIndexByColor = (color) => pets.findIndex(pet => pet.color === color)


// lager en funksjon som finner det siste dyret med en gitt alder
// er vel ikke noe poeng og bruke både findLastIndex og findLast her?
const findLastAnimalByAge = (age) => pets.findLast(pet => pet.age === age)

// lager en funksjon som finner alle dyrene med en gitt egenskap
const filterByTraits = (traits) => pets.filter(pet => pet.traits.includes(traits))

// lager en funksjon som console logger alle dyrene og deres egenskaper
const consoleLogAllPets = () => {
    pets.map(pet => {
        console.log(`${pet.animal}en er ${pet.age} år gammel, ${pet.color} og har egenskapene ${pet.traits.join(', ')}`)
    })
}

consoleLogAllPets()