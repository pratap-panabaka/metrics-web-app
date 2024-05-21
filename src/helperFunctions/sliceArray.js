import getRandomInt from "./getRandomInt.js"

const sliceArray = (array) => {
    if (array.length > 20) {
        let randomInt = getRandomInt(0, array.length - 20)
        let slicedArray = array.slice(randomInt, randomInt + 20)
        return slicedArray;
    }
    return array;
}

export default sliceArray;