/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/


for(let i= 1; i < 10; i++) {
    let html = document.getElementById("cube_row").innerHTML
    document.getElementById("cube_row").innerHTML = html + '<div class="cell d-flex"></div'
    
}

function sum(cell_number, cols_number){
    for(let i= 1; i < 10; i++) {
        let html = document.getElementById("cube_row").innerHTML
        document.getElementById("cube_row").innerHTML = html + '<div class="cell d-flex"></div'
        
        
       
    }
}