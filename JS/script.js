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
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// lager en funksjon som genererer et tilfeldig tall mellom 0 og lengden til arrayen
function randomIndex(array) {
    return randomNumber(0, array.length - 1)
}

// lager en funksjon som legger til et gitt antall tilfeldige elementer fra en array til en annen array uten duplikater
function addMultipleUnique(array, items, amount) {
    for (let i = 0; i < amount; i++) {
        let item = items[randomIndex(items)]
        while (array.includes(item)) {
            item = items[randomIndex(items)]
        }
        array.push(item)
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
console.log(pets)