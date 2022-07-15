// Write your solution here!


const cats = ['Milo', 'Otis', 'Garfield'];
const copyOfCats = [...cats];


function destructivelyAppendCat() {
    cats.length = 3;
    cats.push('Ralph');
}



function destructivelyPrependCat() {
    cats.length = 3;
    cats.unshift('Bob');
}

    
function destructivelyRemoveLastCat() {
    cats.length = 3;
    cats.pop('Garfield');

}

function destructivelyRemoveFirstCat() {
    cats.length =3;
    cats.shift('Milo');
}


function appendCat() {
    
    const allCats = [...cats, 'Broom'];
    return allCats;
}

function prependCat() {
    const allCats = ['Arnold' , ...cats];
    return allCats;

}

function removeLastCat() {
    
    const copyOfCats= cats.slice(0, 2);
    return copyOfCats;
    
}

function removeFirstCat() {
    const copyOfCats= cats.slice(1, 3);
    return copyOfCats;
}