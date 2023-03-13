interface UserBasicData {
    name: string;
    surname: string;
}

interface ComplexData {
    age: number;
    address: string;
}

type FullUser = UserBasicData & ComplexData;

const user: FullUser = {
    name: 'Marcin',
    surname: 'Grygierek',
    age: 18,
    address: 'Warszawa'
}