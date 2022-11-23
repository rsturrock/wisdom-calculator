// Random Wisdom Generator
// Project that outputs random wisdom quotes

const randomIndexSpiritualPractice = Math.floor(Math.random() * 6);
const randomIndexSpiritualSubject = Math.floor(Math.random() * 6);
const randomIndexSpiritualResult = Math.floor(Math.random() * 6);

const spiritualPractice = ['Meditating', 'Reflecting', 'Performing Yoga', 'Praying', 'Contemplating', 'Searching'];

const spiritualSubject = ['under a banyan tree', 'on the impermanence of life', 'on a sacred mountain', 'to the one above', 'on awareness and the Self', 'for the enlightened path'];

const spiritualResult = ['will bring you peace', 'bears the fruit of enlightenment', 'will cultivate a strong mind and body', 'will fill you with joy', 'grounds you in Being', 'will lead you back to the start of your journey'];

let randomWordsOfWisdom = [];

const randomizeWordsOfWisdom = () => {
    randomWordsOfWisdom.push(`${spiritualPractice[randomIndexSpiritualPractice]} ${spiritualSubject[randomIndexSpiritualSubject]} ${spiritualResult[randomIndexSpiritualResult]}.`)

    return randomWordsOfWisdom;
}

console.log(randomizeWordsOfWisdom())