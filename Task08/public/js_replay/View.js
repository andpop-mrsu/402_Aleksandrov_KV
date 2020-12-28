import { start} from './Controller.js';

start();

// export function print(){
//     var ind = games.map(games => games.gameId);
//     var coor = games.map(games => games.array_coord);
//     var count = 0;
    
//     for (var i = 0; i<= (ind.length-1); i++){
//         if(ind[i] == id){
//             listElem.innerHTML = `<table border=1 bgcolor="white" style="font-size: 18; margin-left: 480px"><tr><td id="list" >${coor[i].join('<br>')}</id=>`;
//             count = 1;
//         }
//     }
//     if(count == 0){
//         listElem.innerHTML = '<h2 id="label" align="center">Такой сыгранной партии пока нет</h2>'
//     }
// }

export function print(array){
    let html = "<table border=1 bgcolor='white' style='margin: auto'>";
    html += "<tr>";
    html += "<th>Player Mark</th>";
    html += "<th>Turn</th>";
    for(let i = 0; i < array.length - 2; i++) {
        var temp_array = array[i].split("|").slice(0, 2);
        html += "<tr>";
        for(let j = 0; j < temp_array.length; j++) {
            html += "<td>"+ temp_array[j] + "</td>";
        }
    }
    html += "</table>";
    if(array.length > 1) {
        listElem.innerHTML = html;
    } else {
        alert("Game not found");
    }
}