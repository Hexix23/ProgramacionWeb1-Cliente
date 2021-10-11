let tablero = [ 
    ['bowser', 'luigi', 'mario', 'rosalina', 'bowser', 'yoshi'],
    ['rosalina', 'wario', 'peach', 'wario', 'toad', 'diddy'],
    ['mario', 'toad', 'yoshi', 'luigi', 'diddy', 'peach']
];

let emparejadas = [];
let parejaActual = [];

function clickedCell(elemento){
    if(emparejadas.includes(elemento) || parejaActual.includes(elemento)){
        return;
    } //si ya estan emparejadas no hace nada
    const row = elemento.id.split(',')[0];
    const col = elemento.id.split(',')[1];

    const personaje = tablero[row][col];

    elemento.src = `img/${personaje}.png`; // elemento.src = `'mg' +personaje+ 'png';

    parejaActual.push(elemento);

    if(parejaActual.length === 2){
        if(parejaActual[0].src === parejaActual[1].src){
            parejaActual.forEach(function(e){
                emparejadas.push(e);
            });
            parejaActual = [];
        }else{
            setTimeout(() => {parejaActual.forEach(function(e){
                e.src = 'img/sky.png';
            });
            parejaActual = [];},
            1000);
        }
    }
}