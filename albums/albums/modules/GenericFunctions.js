class GenericFunctions {
    constructor() { }

    getRandLetter = (alphabet = "abcdefghijklmnopqrstuvwxyz") => alphabet[Math.floor(Math.random() * alphabet.length)]

    getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
}

export default GenericFunctions
