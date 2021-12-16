//Creamos un bool que de true cuando la carta está dada vuelta

let flippedCard = false;

//Creamos variables que contengan la primera y la segunda carta.

let card1, card2;

//Creamos el bool lockBoard para impedir que el usuario de vuelta más de dos cartas a la vez
let lockBoard = false;

//Seleccionar todas las cartas con su clase para después usarlas en las funciones

const cards = document.querySelectorAll('.card');

//Por cada carta, cuando el usuario clickea, se va a llamar a la funcion flipCard

cards.forEach(card => card.addEventListener('click', flipCard));



function flipCard() {
    if(lockBoard) return;
    //Agregamos la clase 'flip' a la carta una vez que se clickea
    this.classList.add('flip');
    if (!flippedCard) {
        //Pasamos el bool a true
        flippedCard = true;
        //Asignamos el valor de "this" a la primera carta clickeada
        card1 = this;
        } else {
            //Pasamos el bool a false
            flippedCard = false;
            card2 = this;
            matchTwo();
        }
}


function matchTwo() {
    //Vamos a chequear si las dos coinciden (usando el atributo data)
    if (card1.dataset.match === card2.dataset.match) {
        disableCards();
    } else {
        flipBack();
    }
}

function disableCards() {
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
}

function flipBack() {
    lockBoard = true;
    setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        lockBoard = false;
    }, 1000)
}

