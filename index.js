// Random Wisdom Generator
// Project that outputs random wisdom quotes

// Random Index Generators

let randomIndexSpiritualPractice = Math.floor(Math.random() * 6);
let randomIndexSpiritualSubject = Math.floor(Math.random() * 6);
let randomIndexSpiritualResult = Math.floor(Math.random() * 6);

// Arrays to pull randomized data from

const spiritualPractice = ['Meditating', 'Reflecting', 'Performing Yoga', 'Praying', 'Contemplating', 'Searching'];

const spiritualSubject = ['under a banyan tree', 'on the impermanence of life', 'on a sacred mountain', 'to the one above', 'on awareness and the Self', 'for the enlightened path'];

const spiritualResult = ['will bring you peace', 'bears the fruit of Enlightenment', 'will cultivate a strong mind and body', 'will fill you with joy', 'grounds you in Being', 'will lead you back to the start of your journey'];

// Randomize function that will concate 3 pieces of random data and return a random wisdom quote

const randomizeWordsOfWisdom = () => {

    let randomIndexSpiritualPractice = Math.floor(Math.random() * 6);
    let randomIndexSpiritualSubject = Math.floor(Math.random() * 6);
    let randomIndexSpiritualResult = Math.floor(Math.random() * 6);

    return `${spiritualPractice[randomIndexSpiritualPractice]} ${spiritualSubject[randomIndexSpiritualSubject]} ${spiritualResult[randomIndexSpiritualResult]}.`
}

console.log(randomizeWordsOfWisdom())