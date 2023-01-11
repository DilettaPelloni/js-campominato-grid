//qua metto le funzioni -----------------------------------------------------

//per generare una cella con un indice all'interno
function createCell(index, cellNumber) {
    //creo una cella
    const cell = document.createElement('div');
    //assegno allacella la classe cell
    cell.classList.add('cell');
    //assegno alla cella la larghezza, pari al 100% del contenitore fratto la radice quadrata del numero di celle
    cell.setAttribute("style","width: calc(100% / " + Math.sqrt(cellNumber));
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

//vado a prendere la select
const select = document.getElementById('diff');

//quando clicco sul bottone
playButton.addEventListener ('click',
    function () {
        //svuoto la grid-box
        gridBox.innerHTML = '';
        //vado a prendere il valore della select
        const selectInput = parseInt(select.value);
        //genero le celle
        for (let i = 1; i <= selectInput; i++) {
            createCell(i, selectInput);
        }
        //rendo visibile la grid-box
        gridBox.classList.add('visible');
    }
)