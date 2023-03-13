const user = {
    name: 'Marcin',
    address: {
        street: 'Główna'
    }
}

const { name, address: { street } } = user;

const obj = {
    a: 10,
    b: 10,
    c: 10,
    d: 10,
    e: 400
}

const {c, d, ...objRest} = obj

// usunięcie pierwszego elementu z tablicy bez jej modyfikacji
const a = [1, 2, 3, 4, 5];
const [first, ...rest] = a;
