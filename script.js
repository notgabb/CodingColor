// prende l'elemento che mostra gli errori e gli output
let err = document.getElementById("err")
let out = document.getElementById("out")
let saluto = document.getElementById("saluto")
let date = new Date()
let colori = []

saluto.innerText = `Oggi è il ${date}`

function elabora() {
    // prende l'input inNumero e l'elemento saluto
    let inNumero = document.getElementById("inNumero")
    let inTesto = document.getElementById("inTesto")

    let number = inNumero.value
    inNumero.value = "" // reset

    if (number < 0 || number > 255) {
        err.innerHTML = "Il numero deve essere compreso tra 0 e 255!"
        return
    }

    if (colori.length === 3) {
        colori = [];
    }

    // aggiunge il numero al colore
    colori.push(number)
    out.innerHTML = `Hai inserito il numero ${number}`;
    out.innerHTML += `<br>I colori inseriti sono ${colori}`

    if (colori.length === 3) {
        let newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`
        console.log(inTesto.value)
        out.innerHTML = inTesto.value;
        out.style.color = newColor;
    }
}

function cancella() {
    out.style.color = "rgb(255, 255, 255)"
    out.innerHTML = ""
    err.innerHTML = ""
}