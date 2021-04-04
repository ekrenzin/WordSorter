class Word {
/*
    The idea class is to store both the
    spelling of a word or letter and the phonetics,
    to allow sorting by either
*/
    constructor(spelling, phonetic) {
        this.spelling = spelling
        this.phonetic = phonetic
    }
}

const words = [
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

const sortTypes = ['default', 'phonetic']

/*
    Default outputs: [
        Word { spelling: 'a', phonetic: 'a' },
        Word { spelling: 'b', phonetic: 'bee' },
        Word { spelling: 'c', phonetic: 'cee' },
        Word { spelling: 'd', phonetic: 'dee' },
        Word { spelling: 'e', phonetic: 'e' },
        Word { spelling: 'f', phonetic: 'ef' },
        Word { spelling: 'g', phonetic: 'gee' },
        Word { spelling: 'h', phonetic: 'aitch' },
        Word { spelling: 'i', phonetic: 'i' },
        Word { spelling: 'j', phonetic: 'jay' },
        Word { spelling: 'k', phonetic: 'kay' },
        Word { spelling: 'l', phonetic: 'el' },
        Word { spelling: 'm', phonetic: 'em' },
        Word { spelling: 'n', phonetic: 'en' },
        Word { spelling: 'o', phonetic: 'o' },
        Word { spelling: 'p', phonetic: 'pee' },
        Word { spelling: 'q', phonetic: 'cue' },
        Word { spelling: 'r', phonetic: 'ar' },
        Word { spelling: 's', phonetic: 'es' },
        Word { spelling: 't', phonetic: 'tee' },
        Word { spelling: 'u', phonetic: 'u' },
        Word { spelling: 'v', phonetic: 'vee' },
        Word { spelling: 'w', phonetic: 'doubleu' },
        Word { spelling: 'x', phonetic: 'ex' },
        Word { spelling: 'y', phonetic: 'wy' },
        Word { spelling: 'z', phonetic: 'zee' }
    ]

    Phonetic outputs: [
        Word { spelling: 'a', phonetic: 'a' },
        Word { spelling: 'h', phonetic: 'aitch' },
        Word { spelling: 'r', phonetic: 'ar' },
        Word { spelling: 'b', phonetic: 'bee' },
        Word { spelling: 'c', phonetic: 'cee' },
        Word { spelling: 'q', phonetic: 'cue' },
        Word { spelling: 'd', phonetic: 'dee' },
        Word { spelling: 'w', phonetic: 'doubleu' },
        Word { spelling: 'e', phonetic: 'e' },
        Word { spelling: 'f', phonetic: 'ef' },
        Word { spelling: 'l', phonetic: 'el' },
        Word { spelling: 'm', phonetic: 'em' },
        Word { spelling: 'n', phonetic: 'en' },
        Word { spelling: 's', phonetic: 'es' },
        Word { spelling: 'x', phonetic: 'ex' },
        Word { spelling: 'g', phonetic: 'gee' },
        Word { spelling: 'i', phonetic: 'i' },
        Word { spelling: 'j', phonetic: 'jay' },
        Word { spelling: 'k', phonetic: 'kay' },
        Word { spelling: 'o', phonetic: 'o' },
        Word { spelling: 'p', phonetic: 'pee' },
        Word { spelling: 't', phonetic: 'tee' },
        Word { spelling: 'u', phonetic: 'u' },
        Word { spelling: 'v', phonetic: 'vee' },
        Word { spelling: 'y', phonetic: 'wy' },
        Word { spelling: 'z', phonetic: 'zee' }
    ]
*/

const sortLetters = (method) => {
    let output = []
    if (method == 'default') output = defaultSort()
    if (method == 'phonetic') output = phoneticSort()
    return output
}

const defaultSort = () => {
    return words.sort((a, b) => (a.spelling > b.spelling) ? 1 : -1)
}

const phoneticSort = () => {
    return words.sort((a, b) => (a.phonetic > b.phonetic) ? 1 : -1)
}

for (let sortMethod of sortTypes) {
    const sortedLetters = sortLetters(sortMethod)
    console.log(sortedLetters)
}