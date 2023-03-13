// funkcja ma typ zwracany never poniewaz zawsze będzie wyrzucać błąd

const alwaysThrow = () => {
    throw new Error('błąd!');
}

const alwaysThrowOrReturn = (): number | never => {
    const rand = Math.random();

    if (rand > 0.5)
        throw new Error('błąd!');
    return rand;
}