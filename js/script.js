console.log('JS OK');


/*
1. Recupero elementi dal DOM
2. Preparo tre variabili: una per il prezzo, e due per gli sconti
3. Prendo dagli input i km da percorrere e se l'età dell'utente
4. Genero il prezzo del biglietto moltiplicando i km per la variabile prezzo
5. Verifico che l'utente sia un minore o un over65 e nel caso applico lo sconto relativo
6. Inserisco il prezzo e il resto delle informazioni negli elementi del DOM
*/

//Recuper elementi dal DOM
const resultTravelLength = document.getElementById('travel-length');
console.log(resultTravelLength);

const resultUserAge = document.getElementById('user-age');
console.log(resultUserAge);

const button = document.querySelector('button');
console.log(button);

//Preparo le tre variabili

const pricePerKm = 0.21;
const minorDiscount = 0.2;
const overDiscount = 0.4;

//Recupero km e età

button.addEventListener('click', function () {
    const travelLength = parseInt(resultTravelLength.value.trim());
    const userAge = parseInt(resultUserAge.value.trim());
    console.log(travelLength, 'km da percorrere');
    console.log(userAge, 'età utente');

    const originalPrice = travelLength * pricePerKm;
    console.log(originalPrice, 'prezzo iniziale');

    let finalPrice;
    if (userAge < 18) {
        finalPrice = originalPrice - (originalPrice * minorDiscount);
    } else if (userAge > 65) {
        finalPrice = originalPrice - (originalPrice * overDiscount);
    }

    console.log(finalPrice.toFixed(2), 'prezzo finale');

})