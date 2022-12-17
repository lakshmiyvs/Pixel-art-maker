// Select color input
var color = document.getElementById("colorPicker");

// Select size input
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

//identify the table element
var table = document.getElementById("pixelCanvas");

//submit button
var sizePicker = document.getElementById("sizePicker");

//makeGrid inserts rows and cells to create the table
function makeGrid() {
    //The user can reset the grid if row count > 0.
    rows = table.getElementsByTagName('tr');
    if (rows.length > 0) {
        table.innerHTML = "";
    }
    for (h = 0; h < height.value; h++) {
        row = table.insertRow(h);
        for (w = 0; w < width.value; w++) {
            cell = row.insertCell(w);            
            cell.addEventListener('click' , colorGrid, false );
        }
    }
    //prevents default behavior of the page.
    event.preventDefault();
}

sizePicker.addEventListener('submit', makeGrid);

//To change the color of the cell
function colorGrid() {
        //color picker sets color variable
        this.style.backgroundColor = color.value;
}