console.log("Inizializzato!")

function elabora() {
    let saluto = document.getElementById("saluto")
    let casella = document.getElementById("inNumero")
    let number = casella.value
    casella.value = "" // reset

    let data = new Date()
    saluto.innerText = data.getDay()

    let err = document.getElementById("err")
    let out = document.getElementById("out")

    if (number < 0 || number > 255) {
        err.innerText = "Il numero deve essere compreso tra 0 e 255!"
        return
    }

    alert(number)
    out.innerText = number;
}