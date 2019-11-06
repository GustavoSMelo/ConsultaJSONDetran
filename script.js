'use strict';

const registro = window.document.querySelector('#registro');
console.log(detran.length);

registro.innerHTML = ``;

for(let i = 0; i < 50; i++){
    registro.innerHTML += `
    <article class=${detran[i].gravidade}>
        <header class="proprietario"><strong>${detran[i].proprietario}</strong></header>
        <img class="image" src=${detran[i].foto}/>
        <br/> 
        <section class="info">
            <strong>CNH:</strong> ${detran[i].cnh}
            <strong>Placa: </strong> ${detran[i].placa}
            <strong>gravidade: </strong> ${detran[i].gravidade}
        </section>
        <br class="clear"/>
        <aside class="pts">
            <strong>Pontos:</strong> ${detran[i].pontos}
        </aside>
            
        <article class="emissao">
            <span><strong>Data: </strong> ${detran[i].data_infracao}
            <hr/>
            <span><strong>Valor: </strong> ${detran[i].valor}</span>
        </article>
        
    </article>`;
}

let cont = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;
let gleve = 0;
let gmedia = 0;
let ggrave = 0;
let ggravisimo = 0;

//media gravidade leve
for (let i = 0; i < detran.length; i++) {
    if (detran[i].gravidade == "Leve") {
        gleve += parseFloat(detran[i].valor.substr(1));
        cont++;
    }
}

let valorleve = gleve / cont;
document.getElementById('dadoleve').innerHTML = valorleve.toFixed(2);

//media gravidade media
for (let z = 0; z < detran.length; z++) {
    if (detran[z].gravidade == "Média") {
        gmedia += parseFloat(detran[z].valor.substr(1));
        cont2++;
    }
}
let valormedia = gmedia / cont2;
document.getElementById('dadomedia').innerHTML = valormedia.toFixed(2);


//media gravidade grave
for (let x = 0; x < detran.length; x++) {
    if (detran[x].gravidade == "Grave") {
        ggrave += parseFloat(detran[x].valor.substr(1));
        cont3++;
    }
}
let valorgrave = ggrave / cont3;
document.getElementById('dadograve').innerHTML = valorgrave.toFixed(2);


for (let w = 0; w < detran.length; w++) {
    if (detran[w].gravidade == "Gravíssima") {
        ggravisimo += parseFloat(detran[w].valor.substr(1));
        cont4++;
    }
}
let valorgravissima = ggravisimo / cont4;
document.getElementById('dadogravissimo').innerHTML = valorgravissima.toFixed(2);