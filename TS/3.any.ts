// any wyłącza kontrolę typów - oznacza "cokolwiek"

let value: any = 10;
value = "asd";
value = true;
value = {a:10};

// uzycie any zamiast interfejsu - BŁAD!!!

interface User {
    name: string;
    surname: string;
    age: number;
    address: string;
}

const user: any = {
    name: 'A',
    surname: 'B',
}

// Jak to powinno być wykonane:
interface User {
    name: string;
    surname: string;
    age: number;
    address: string;
}

interface UserBasic {
    name: string;
    surname: string;
}

const user: UserBasic = {
    name: 'A',
    surname: 'B',
}

// rozszerzenie interfejsu:
interface UserBasic {
    name: string;
    surname: string;
}

interface User extends UserBasic {
    age: number;
    address: string;
}

const user: UserBasic = {
    name: 'A',
    surname: 'B',
}

const fullUser: User = {
    name: 'C',
    surname: 'D',
    age: 22,
    address: 'Lorem ipsum'
}