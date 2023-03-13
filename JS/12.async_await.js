const getPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
    
            if(random > 0.5) {
                resolve('Sukces! ' + random);
            } else {
                reject('Błąd! ' + random);
            }
        }, 2500);
    });
}

const getData = async() => {
    try {
        const result = await getPromise();
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}

// oba console logi wykonają się od razu
console.log('PRZED')
getData();
console.log('PO');


// drugi console.log wykona się po 2.5 sekundy - await wymusza poczekanie na zakończenie funkcji
console.log('PRZED')
await getData();
console.log('PO');