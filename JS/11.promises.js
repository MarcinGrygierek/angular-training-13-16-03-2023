const prms = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();

        if(random > 0.5) {
            resolve('Sukces! ' + random);
        } else {
            reject('Błąd! ' + random);
        }
    }, 2500);
});

prms.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// z await

const prms2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();

        if(random > 0.5) {
            resolve('Sukces! ' + random);
        } else {
            reject('Błąd! ' + random);
        }
    }, 2500);
});

try {
    const result = await prms2;
    console.log(result);
} catch(e) {
    console.log(e);
}

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

try {
    const result = await getPromise();
    console.log(result);
} catch(e) {
    console.log(e);
}