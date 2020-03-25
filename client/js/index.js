var campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')  
]; //objeto

console.log(campos);

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit',function(event){
  
  event.preventDefault();

  var tr = document.createElement('tr');

  campos.forEach(function(campo){

    var td = document.createElement('td');
    td.textContent = campo.value;

    tr.appendChild(td);

  }); //evento do tipo submit -> cria um tr e seus td e add valor aos td

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  
  campos[0].focus();


}); 