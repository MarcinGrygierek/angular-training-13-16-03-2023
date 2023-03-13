// nie uzywamy w aplikacjach w ogóle let
var value = 100;

let letValue = 100;

// staramy się uzywac przede wszystkim constów - dla czystości kodu
const constValue = 200;

// let i const mają zakres blokowy
{
    var var1 = 10;
    let var2 = 20;
    const var3 = 30;
}

// j nie jest widoczne poza { }
for(let j = 0; j < 10; j++) {
    console.log(j);
}