class Word {
    /*
        The idea of this class is to store both the
        spelling of a word and the phonetics,
        to allow sorting by either. Also works for letters.
    */
    constructor(spelling, phonetic) {
        this.spelling = spelling
        this.phonetic = phonetic
    }
}

const alphabet = [
    new Word('a', "a"),
    new Word('b', "bee"),
    new Word('c', "cee"),
    new Word('d', "dee"),
    new Word('e', "e"),
    new Word('f', "ef"),
    new Word('g', "gee"),
    new Word('h', "aitch"),
    new Word('i', "i"),
    new Word('j', "jay"),
    new Word('k', "kay"),
    new Word('l', "el"),
    new Word('m', "em"),
    new Word('n', "en"),
    new Word('o', "o"),
    new Word('p', "pee"),
    new Word('q', "cue"),
    new Word('r', "ar"),
    new Word('s', "es"),
    new Word('t', "tee"),
    new Word('u', "u"),
    new Word('v', "vee"),
    new Word('w', "doubleu"),
    new Word('x', "ex"),
    new Word('y', "wy"),
    new Word('z', "zee"),
]

const words = [
    new Word('apple', "see"),
    new Word('brown', "see"),
    new Word('bread', "see"),
    new Word('bear', "see"),
    new Word('built', "see"),
    new Word('even weed', "even weed"),
]

const arbitrayKey = [
    'o','a', 'r', 'h', 'b', 'c', 'q', 'd',
    'w', 'y', 'e', 'f', 'l', 'm', 'n',
    's', 'x', 'g', 'i', 'j', 'k', 
    'p', 't', 'u', 'v', 'z'
]

const sortTypes = ['default', 'phonetic', 'arbitraryKeySort']

const sortWords = (method) => {
    let output = []
    if (method == 'default') output = defaultSort()
    if (method == 'phonetic') output = phoneticSort()
    if (method == 'arbitraryKeySort') output = arbitraryKeySort()
    return output
}

const defaultSort = () => {
    return words.sort((a, b) => (a.spelling > b.spelling) ? 1 : -1)
}

const phoneticSort = () => {
    return words.sort((a, b) => (a.phonetic > b.phonetic) ? 1 : -1)
}

const arbitraryKeySort = () => {
    return words.sort((a, b) => {
        let relativeIdxA = arbitrayKey.indexOf(a.spelling[0])
        let relativeIdxB = arbitrayKey.indexOf(b.spelling[0])
        equal = relativeIdxA === relativeIdxB

        let strChar = 0

        while (equal) {
            // while the string are equal, check next char until length, and if len, return 
            strChar += 1
            if (!a.spelling.length >= strChar + 1) return 1
            if (!b.spelling.length >= strChar + 1) return -1
            relativeIdxA = arbitrayKey.indexOf(a.spelling[strChar])
            relativeIdxB = arbitrayKey.indexOf(b.spelling[strChar])
            equal = relativeIdxA === relativeIdxB
        }
        if (relativeIdxA > relativeIdxB) return 1
        else return -1
    })
}

for (let sortMethod of sortTypes) {
    const sortedLetters = sortWords(sortMethod)
    console.log(sortedLetters)
}
