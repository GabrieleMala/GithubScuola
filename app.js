console.log("Hello world")
function saluto(nome) {
    console.log("Ciao, " + nome + "!");
}

saluto("Tonielli"); 
const sommaArray = (numeri) => numeri.reduce((acc, curr) => acc + curr, 0);
const speseMensili = [150, 23, 50, 420];
const totale = sommaArray(speseMensili);

console.log(`Array originale: ${speseMensili}`);
console.log(`Somma totale: ${totale}`);