const a = [1, 2, 3]
// kopiujemy referencję
const b = a;
const c = [1, 2, 3]

const a2 = [1, 2, 3, 4, 5]
// tworzymy kopię
const b2 = [...a];

const a3 = [1, 2]
const b3 = [3, 4]
// tablica c3 zawiera połączone tablice a3 i b3 oraz dodatkowe elementy
const c3 = [...a3, 3, 4, ...b3, 5, 6];

const user = {
    name: 'Marcin',
    address: {
        street: 'Główna'
    }
}

// głęboka kopia obiektuy
const userCopy = {
    ...user,
    address: {
        ...user.address
    }
}

// dowolna ilosć parametrów - values to tablica wewnątrz funkcji
function sum(...values) {
    console.log(values);
}

function bar(a, b, c, ...args) {
    console.log(a, b, c, args)
}