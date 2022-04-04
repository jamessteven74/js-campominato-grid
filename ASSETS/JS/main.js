/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

*/


function generateGrid(number_of_cells, selector, element_name, class_name) {
    const cellsElement = document.querySelector(selector)
    for (let i = 1; i <= number_of_cells; i++) {
      const cell = document.createElement(element_name)
      cell.classList.add(class_name)
      cellsElement.append(cell)
    }
  }


  


