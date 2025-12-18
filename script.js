console.log("Inizializzato!")
let colori = []

function elabora() {
    // prende l'input inNumero e l'elemento saluto
    let saluto = document.getElementById("saluto")
    let casella = document.getElementById("inNumero")
    let number = casella.value
    casella.value = "" // reset

    let data = new Date()
    // imposta il valore della field "saluto" come il giorno corrente
    saluto.innerText = data.getDay()

    // prende l'elemento che mostra gli errori e gli output
    let err = document.getElementById("err")
    let out = document.getElementById("out")

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
        out.style.color = newColor;
    }
}