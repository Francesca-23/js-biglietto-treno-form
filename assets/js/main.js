/*
1-Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    -input

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
2-il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -input km * 0.21

3-va applicato uno sconto del 20% per i minorenni
    -if minorenni: prezzo - 20%

4-va applicato uno sconto del 40% per gli over 65.
    -if over 65: prezzo - 40%

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

const sfondo = document.querySelector('#box').value;

document.querySelector('#box').style.backgroundColor = "rgba(147, 250, 165, 0.9)";


function creazioneBiglietto(){

    let nomeIntero = document.getElementById('nomeCognome').value;
    let km = document.getElementById('numeroKm').value;
    let eta = document.getElementById('etaPasseggero').value;

    let prezzoKm = km * 0.21; 

    //sconti per età

    const sconto1 = prezzoKm * 0.2;
    const sconto2 = prezzoKm * 0.4;
    
    if(eta < 18){
        prezzoKm = prezzoKm - sconto1;
    }
    else if(eta > 65){
        prezzoKm = prezzoKm - sconto2;
    }
    
    //biglietto scontato o biglietto standard

    let prezzoScontato;

    if(eta < 18 || eta > 65){
        prezzoScontato = "Biglietto scontato";
    }
    else{
        prezzoScontato = "Biglietto standard";
    }

    //valori stampati

    document.querySelector('#box2').classList.toggle('d-none')

    document.querySelector('#nome').innerHTML += `<span> ${nomeIntero} </span>`;

    document.querySelector('#offerta').innerHTML += `<span> ${prezzoScontato} </span>`;

    document.querySelector('#carrozza').innerHTML += `<span> ${random(0, 10)} </span>`;

    document.querySelector('#codice').innerHTML += `<span> ${random(0, 5000)} </span>`;

    document.querySelector('#costo').innerHTML += `<span> ${prezzoKm.toFixed(2)} </span>`;
}


function random(min, max){
    return Math.floor(Math.random() * max) + min;
}