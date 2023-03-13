const arr = [1, 2, 3, 4, 5, 6];
arr.push(19);

// brak mozliwości wrzucenia niezgodnej wartości z typem
// arr.push('20');


const arr2 = [];

// tablica posiada typ any który oznacza ze mozemy do niej wrzucić cokolwiek
arr2.push(19);
arr2.push('20');
arr2.push(true);

// definiujemy ze tablica moze zawierać liczby i ciagi znaków
const arr3: (number | string)[] = [];
arr3.push(19);
arr3.push('20');
arr3.push(true);

// obiekt z opcjonalnym polem
const obj: {
    name: string,
    surname: string,
    age?: number
} = {
    name: 'Marcin',
    surname: 'Grygierek'
}

// krotka - czyli tak na prawdę tablica z odpowiednio zachowaną kolejnością
const arr1 = ['Ala', 23, 'Dworcowa'];
const arr2: [string, number, string] = ['Ala', 23, 'Dworcowa'];

// interfejsy
interface User {
    name: string;
    surname: string;
    street: string;
    age?: number;
}

const user1: User = {
    name: 'Marcin',
    surname: 'Grygierek',
    street: 'Dworcowa',
    age: 29
}

const user2: User = {
    name: 'Adam',
    surname: 'Nowak',
    street: 'Główna'
}

// interfejsy zagniezdzone
interface Address {
    street: string,
    city: string
}

interface User {
    name: string;
    surname: string;
    address: Address;
    age?: number;
}

const user1: User = {
    name: 'Marcin',
    surname: 'Grygierek',
    address: {
        street: 'Dworcowa',
        city: 'Warszawa'
    },
    age: 29
}

const user2: User = {
    name: 'Adam',
    surname: 'Nowak',
    address: {
        street: 'Główna',
        city: 'Warszawa'
    },
}

// otypowanie krotki przy pomocy typu
type UserData = [string, number, string];

const userData: UserData = ['Marcin', 29, 'Główna'];

// typ oraz interfejs
interface UserInterface {
    name: string;
    surname: string;
}

type UserType = {
    name: string;
    surname: string;
}

const user1: UserInterface = {
    name: 'a',
    surname: 'b'
}

const user2: UserType = {
    name: 'c',
    surname: 'd'
}

type StringOrNumber = string | number;