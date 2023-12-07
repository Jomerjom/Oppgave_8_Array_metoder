const animals = ["Hund", "Katt", "Kanin", "Hamster", "Fugl", "Fisk"]
const colors = ["Rød", "Blå", "Grønn", "Gul", "Lilla", "Hvit"]
const traits = [
    "Vennlig", "Energisk", "Rolig", "Nysgjerrig", "Sky",
    "Leken", "Intelligent", "Trofast", "Uavhengig", "Sosial",
    "Snill", "Beskyttende", "Kjærlig", "Forsiktig", "Eventyrlysten",
    "Stille", "Lydig", "Utholdende", "Modig", "Tålmodig",
    "Morsom", "Aktiv", "Rolig", "Selvsikker", "Nervøs"
]

let pets = []

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomIndex(array) {
    return randomNumber(0, array.length - 1)
}

function addMultipleUnique(array, items, amount) {
    for (let i = 0; i < amount; i++) {
        let item = items[randomIndex(items)]
        while (array.includes(item)) {
            item = items[randomIndex(items)]
        }
        array.push(item)
    }
}

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

generatePet()
console.log(pets)