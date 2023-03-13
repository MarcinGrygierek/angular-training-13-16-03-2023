let value: unknown;
value = 10;
value = true;
value = 'asdasd';

let valueUnknown: unknown;
let valueAny: any;

valueAny.getValue();

// TS nas nie puści - musielibyśmy sprecyzować czym dokładnie jest ta wartość
valueUnknown.getValue()


// uzycie rzutowania do doprecyzowania typu
interface User {
    name: string;
    age: number;
}

let value: unknown;

value = {
    name: 'Marcin',
    age: 20
};

(value as User).age.toFixed(2);