function abilitaBottoneCreaTabella() {
    if (document.myForm.txtNumeroRighe.value > 0 && document.myForm.txtNumeroColonne.value > 0) 
        document.myForm.btnCreaTabella.disabled = false;
    else
        document.myForm.btnCreaTabella.disabled = true;
}
function creaTabella(numeroRighe, numeroColonne, divTabella) {
    let divTabellaObj = document.getElementById(divTabella);
    //console.log("Numero rihe: " + numeroRighe);
    //console.log("Numero colonne: " + numeroColonne);
    //console.log(divTabellaObj);
    //creazione della tabella
    let htmlTableString = '<table id="table" class="Visible">'
    htmlTableString += tableHeader(numeroColonne);
    for (let i = 0; i < numeroRighe; i++) {
        htmlTableString += tableRow(numeroColonne);
    }
    htmlTableString += '</table>';
    divTabellaObj.innerHTML = htmlTableString;
    document.getElementById("btnHideTable").disabled = false;
}
function cancellaTabella(divTabella) {
    let divTabellaObj = document.getElementById(divTabella);
    divTabellaObj.innerHTML = "";
    document.getElementById("btnHideTable").disabled = true;
}
function nascondiTabella() {
    let table = document.getElementById("table");
    if (table.className == "Invisible") {
        document.getElementById("btnHideTable").textContent = "Nascondi tabella";
        table.className = "Visible";
    } else {
        document.getElementById("btnHideTable").textContent = "Visualizza tabella";
        table.className = "Invisible";  
    }
}
function tableHeader(numeroColonne) {
    let htmlString = '<tr>';
    for (let i = 0; i < numeroColonne; i++) {
        htmlString += '<th> Header: ' + i.toString() + '</th>';
    }
    htmlString += '</tr>';
    return htmlString;
}

function tableRow(numeroColonne) {
    let htmlString = '<tr>';
    for (let i = 0; i < numeroColonne; i++) {
        htmlString += '<td> Cella: ' + i.toString() + '</td>';
    }
    htmlString += '</tr>';
    return htmlString;
}