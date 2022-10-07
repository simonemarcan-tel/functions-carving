const createWoodBlock = (woodLength) => {
    // Return an object with 4 properties.
    const woodObject = {
        type: "wood block",
        length: woodLength,
        material: "pine",
        purpose: "flute"
    }
    return woodObject
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringRepresentation = `The ${woodObject.length} inch, ${woodObject.material} ${woodObject.type} was carved into a ${woodObject.purpose}.`

    return stringRepresentation
}


// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock(11)

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)