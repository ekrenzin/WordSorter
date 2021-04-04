class Word {
    /*
        The idea of this class is to store both the
        spelling of a word and the phonetics,
        to allow sorting by either. Also works for letters.
    */
    constructor(spelling, phonetic) {
        this.spelling = spelling
        this.phonetic = this.toPhonetic()
    }

    toPhonetic() {
        let chars = []
        const spelling = this.spelling
        const getLetterPhonetic = (char) => {
            for (let letter of alphabet) if (char === letter.spelling) return letter.phonetic
        }

        for (let char of spelling) {
            chars.push(getLetterPhonetic(char))
        }

        return chars.join('')
    }
}

class Letter {
    constructor(spelling, phonetic) {
        this.spelling = spelling
        this.phonetic = phonetic
    }
}

const alphabet = [
    new Letter('a', "a"),
    new Letter('b', "bee"),
    new Letter('c', "cee"),
    new Letter('d', "dee"),
    new Letter('e', "e"),
    new Letter('f', "ef"),
    new Letter('g', "gee"),
    new Letter('h', "aitch"),
    new Letter('i', "i"),
    new Letter('j', "jay"),
    new Letter('k', "kay"),
    new Letter('l', "el"),
    new Letter('m', "em"),
    new Letter('n', "en"),
    new Letter('o', "o"),
    new Letter('p', "pee"),
    new Letter('q', "cue"),
    new Letter('r', "ar"),
    new Letter('s', "es"),
    new Letter('t', "tee"),
    new Letter('u', "u"),
    new Letter('v', "vee"),
    new Letter('w', "doubleu"),
    new Letter('x', "ex"),
    new Letter('y', "wy"),
    new Letter('z', "zee"),
]

//let's assume these come from a db
const words = [
    new Word(spelling = 'apple'),
    new Word(spelling = 'brown'),
    new Word(spelling = 'bread'),
    new Word(spelling = 'bear'),
    new Word(spelling = 'built'),
]

const inputAlphabeticalOrder = [
    'o', 'a', 'r', 'h', 'b', 'c', 'q', 'd',
    'w', 'y', 'e', 'f', 'l', 'm', 'n',
    's', 'x', 'g', 'i', 'j', 'k',
    'p', 't', 'u', 'v', 'z'
]

const sort = (alphabeticalOrder) => {
    const sortTypes = ['default', 'phonetic', 'arbitraryKeySort']

    const sortWords = (method) => {
        if (method == 'default') return words.sort(defaultSort)
        if (method == 'phonetic') return words.sort(phoneticSort)
        if (method == 'arbitraryKeySort') return words.sort((a, b) => {
            return (arbitraryKeySort({ a, b, property: 'spelling' }))
        })
    }

    const defaultSort = () => (a, b) => (a.spelling > b.spelling) ? 1 : -1


    const phoneticSort = (a, b) => {
        return arbitraryKeySort({ a, b, property: 'phonetic' })
    }

    const arbitraryKeySort = (data) => {
        const { a, b, property } = data
        let relativeIdxA = alphabeticalOrder.indexOf(a[property][0])
        let relativeIdxB = alphabeticalOrder.indexOf(b[property][0])
        equal = relativeIdxA === relativeIdxB

        let strChar = 0

        while (equal) {
            // while the string are equal, check next char until length, and if len, return 
            strChar += 1
            if (!a.spelling.length >= strChar + 1) return 1
            if (!b.spelling.length >= strChar + 1) return -1
            relativeIdxA = alphabeticalOrder.indexOf(a[property][strChar])
            relativeIdxB = alphabeticalOrder.indexOf(b[property][strChar])
            equal = relativeIdxA === relativeIdxB
        }
        if (relativeIdxA > relativeIdxB) return 1
        else return -1
    }


    for (let sortMethod of sortTypes) {
        const sortedLetters = sortWords(sortMethod)
        console.log(sortedLetters)
    }

}


sort(inputAlphabeticalOrder)