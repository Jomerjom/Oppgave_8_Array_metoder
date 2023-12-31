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

// lager et tomt array for å lagre dyrene
let pets = []

// lager en funksjon som genererer et tilfeldig tall med gitt min og max verdier
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

// lager en funksjon som finner det første dyret
const findAnimal = (animal) => {
    const result = pets.find(pet => pet.animal === animal);
    return result ? result : "No results found for given animal";
}

// lager en funksjon som finner det første dyret med en gitt farge
const findFirstIndexByColor = (color) => {
    const result = pets.findIndex(pet => pet.color === color);
    return result !== -1 ? result : "No results found for given color";
}

// lager en funksjon som finner det siste dyret med en gitt alder
const findLastAnimalByAge = (age) => {
    const result = pets.reverse().find(pet => pet.age === age);
    return result ? result : "No results found for given age";
}

// lager en funksjon som finner alle dyrene med en gitt egenskap
const filterByTraits = (traits) => {
    const result = pets.filter(pet => pet.traits.includes(traits));
    return result.length > 0 ? result : "No results found for given traits";
}

// lager en funksjon som console logger alle dyrene og deres egenskaper
const consoleLogAllPets = () => {
    pets.map(pet => {
        console.log(`${pet.animal}en er ${pet.age} år gammel, ${pet.color} og er ${pet.traits.join(', ')}`);
    });
}

// kaller på funksjonene
generatePet();
console.log(pets);
consoleLogAllPets();

// tester alle find og filter funksjonene
console.log(findAnimal("Katt"));
console.log(findFirstIndexByColor("Blå"));
console.log(findLastAnimalByAge(5));
console.log(filterByTraits("Rolig"));
