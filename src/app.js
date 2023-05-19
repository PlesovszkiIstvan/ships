/*
File: app.js
Author: Plesovszki Isvtán
Copyright: 2023, Plesovszki Isvtán
Group: Szoft I-2 N
Date: 2023-05-19
Github: https://github.com/PlesovszkiIstvan/
Licenc: GNU GPL
*/

const doc = {
    tobdy: document.querySelector('#tbody')
}

const state = {
    ships: [],
    host: 'http://localhost:8000/'
}

window.addEventListener('load', () => {
    init();
})

function init(){
    getShips();
}

function getShips(){
    let endpoint = 'ships'
    let url = state.host + endpoint;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        state.ships = res;
        rednerTable();
    })
}

function rednerTable(){
    var rows = '';
    state.ships.forEach(ship => {
        rows += `
            <tr>
                <td>${ship.name}</td>
                <td>${ship.length}</td>
                <td>${ship.price}</td>
                <td>${ship.person}</td>
                <td>${ship.trailer}</td>
            </tr>
        `
    });
    doc.tobdy.innerHTML = rows;
}