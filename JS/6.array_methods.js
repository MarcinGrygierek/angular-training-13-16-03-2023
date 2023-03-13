const a = [1, 2, 3, 4, 5];

a.forEach((element, index, array) => {
    console.log(element, index, array);
})

// tablica z potęgami liczb
const b = a.map((element) => Math.pow(element, 2));

// tablica tylko z liczbami parzystymi
const c = b.filter((element) => {
    if (element % 2 === 0) return true;
    else return false;
});

const c2 = b.filter((element) => element % 2 === 0);

// sumowanie elementów
const sum = a.reduce((acc, curr) => acc + curr);

// sumowanie wartości z tablicy obiektów
const items = [{ a: 10 }, { a: 20 }, { a: 30 }];
const sum2 = items.reduce((acc, curr) => acc + curr.a, 0)