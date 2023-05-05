function scriviTAG() {
    let div = document.getElementById("idTAG");
    //genera TAG da string = innerHTML
    let strListaTAG = generaTAG('img','Faro.jpg','idFaro','immagine','img/Faro.jpg');
    strListaTAG += generaTAG('img','TramontoTropicale.jpg','','immagine','img/TramontoTropicale.jpg');
    div.innerHTML = strListaTAG;
}   
function scriviTAGObj() {
    let div = document.getElementById("idInsertedByObj");
    //genera TAG da Obj = appendChild()
    let elementoCreato = generaTAGObj('img','Faro.jpg','idFaro','immagine','img/Faro.jpg')
    div.appendChild(elementoCreato);
    elementoCreato = generaTAGObj('img','TramontoTropicale.jpg','idTramonto','immagine','img/TramontoTropicale.jpg');
    div.appendChild(elementoCreato);
}
function generaTAGObj(tag,innerText,id,classe,url) {
    //let strTAG ="";
    let elemento = null;
    let lowerTAG = tag.toLowerCase();
    elemento = document.createElement(lowerTAG);
    switch (lowerTAG) {
     case 'p': 
     case 'h1': 
     case 'h3': 
     case 'span':
        //elemento = document.createElement(lowerTAG);
        elemento.setAttribute("id",id);
        elemento.setAttribute("class",classe);
        elemento.textContent = innerText;
        break;
     case 'a':
        //elemento = document.createElement(lowerTAG);
        elemento.setAttribute("id",id);
        elemento.setAttribute("href",url);
        elemento.setAttribute("class",classe);
        elemento.setAttribute("alt",innerText);        
        break;    
     case 'img':
        //elemento = document.createElement(lowerTAG);
        elemento.setAttribute("id",id);
        elemento.setAttribute("src",url);
        elemento.setAttribute("class",classe);
        elemento.textContent = innerText;
        break;                           
     default:
        elemento = null;
        break; 
    } 
    console.log(elemento);
    return elemento;
}
function generaTAG(tag,innerText,id,classe,url) {
   let strTAG ="";
   let lowerTAG = tag.toLowerCase();
   switch (lowerTAG) {
    case 'p': 
    case 'h1': 
    case 'h3': 
    case 'span':
        strTAG += '<' + lowerTAG + ' id="'+ id + '" class="'+ classe + '"' + '>' 
        strTAG += innerText;
        strTAG += '</' + lowerTAG + '>';
        console.log(strTAG);
        break;
    case 'a':
    strTAG += '<' + lowerTAG + ' href="' + url + '"' + ' id="'+ id + '" class="'+ classe + '"' + '>'
        strTAG += innerText;
        strTAG += '</' + lowerTAG + '>';
        console.log(strTAG);
        break;    
    case 'img':
        let proprId = '';
        if(id != '')
            proprId += 'id="' + id +'"';
        strTAG += '<' + lowerTAG + ' src="' + url + '" ' + proprId + ' class="'+ classe + '"' + ' alt="' + innerText + '"' +'/>'
        console.log(strTAG);
        break;                           
    default:
        break;
   } 
   return strTAG;
}
function insertPElement() {
    let element = document.createElement('p');
    element.textContent = "Ciao";
    //let testo = document.createTextNode('Ciao');
    let divNode = document.getElementById("idInsertedElement");
    divNode.appendChild(element);
}