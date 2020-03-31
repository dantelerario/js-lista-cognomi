// chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione della lista in cui  il nuovo utente si trova

var userSurname = '';
var listSurname = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var userSurname = document.getElementById('addSurname');
var btnAdd = document.getElementById('add');

var list = document.getElementById('ulList');

btnAdd.addEventListener('click',
  function() {
    listSurname.push(userSurname.value);
    console.log(listSurname);

    var a = listSurname.indexOf(userSurname.value);
    console.log(a);
    document.getElementById("position").innerHTML = 'Posizione: ' + a;

    // Aggiunta cognome alla lista e creazione lista
    for (var i = 0; i < listSurname.length; i++) {
        var surname = listSurname[i];

        var lastSurname = list.innerHTML;

        var newlistSurname = '<li>' + surname + '</li>';
        list.innerHTML = lastSurname + newlistSurname;
    }

    // Ordine alfabetico
    listSurname.sort();
    document.getElementById("sortList").innerHTML = listSurname;

  }
)
