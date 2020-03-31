// chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione della lista in cui  il nuovo utente si trova

var userSurname = prompt('Insert your surname');
var listSurname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

var list = document.getElementById('ulList');

listSurname.push(userSurname);
console.log(listSurname);

for (var i = 0; i < listSurname.length; i++) {
    var surname = listSurname[i];

    var lastSurname = list.innerHTML;

    var newlistSurname = '<li>' + surname + '</li>';
    list.innerHTML = lastSurname + newlistSurname;

}

var a = listSurname.indexOf(userSurname);
console.log(a);
document.getElementById("position").innerHTML = 'Posizione: ' + a;

listSurname.sort();
document.getElementById("sortList").innerHTML = listSurname + '';
