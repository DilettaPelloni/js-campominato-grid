//qua metto le funzioni -----------------------------------------------------

//per generare una cella con un indice all'interno
function createCell(index) {
    //creo una cella
    const cell = document.createElement('div');
    //assegno allacella la classe cell
    cell.classList.add('cell');
    //creo uno span
    const span = document.createElement('span');
    //metto il numero dell'indice dentro all span
    span.innerHTML = index;
    //metto lo span nella cella
    cell.append(span);
    //aggiungo un event listener alla cella
    cell.addEventListener ('click',
        function() {
            //se è già selezionata
            if (cell.classList.contains('selected')) {
                //la deseleziono
                cell.classList.remove('selected');
            }
            else {
                //altrimenti la seleziono
                cell.classList.add('selected');
                //e mostro in console il numero della cella
                console.log (index);
            }
        }
    )
    //metto la cella nella grid box
    gridBox.append(cell);
}

//----------------------------------------------------------------------------

//vado a prendere il bottone
const playButton = document.getElementById('play-button');

//vado a prendere la grid box
const gridBox = document.getElementById('grid-box');

//quando clicco sul bottone
playButton.addEventListener ('click',
    function () {
        //rendo visibile la grid-box
        gridBox.classList.add('visible');
        //genero 100 celle
        for (let i = 1; i <= 100; i++) {
            createCell(i);
        }
    }
)