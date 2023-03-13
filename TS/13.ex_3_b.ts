interface Car {
    name: string;
    isBroken: boolean;
}

const cars: Car[] = [
    {
        name: 'Toyota',
        isBroken: false,
    },
    {
        name: 'Fiat',
        isBroken: true,
    },
    {
        name: 'Mercedes',
        isBroken: false,
    },
    {
        name: 'Porsche',
        isBroken: true
    }
]

const carsInfo: string[] = cars
    .filter(car => car.isBroken)
    .map(car => `Samochód ${car.name} jest zepsuty`);

console.log(carsInfo);