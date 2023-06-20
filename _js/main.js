//Criando relogio

function updateClock() {

    //Obtém a hora atual
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();

      hours = addZeroPadding(hours);
      minutes = addZeroPadding(minutes);
      seconds = addZeroPadding(seconds);

      var time = hours + ":" + minutes + ":" + seconds;
    
      //Obtém referências ao elemento do relógio
      document.getElementById("clock").textContent = time;

      setTimeout(updateClock, 1000);
    }

    function addZeroPadding(number) {
      return number < 10 ? "0" + number : number;
    }

    updateClock();

//Criando calendario

//limpa o calendario
function updateCalendar(year, month){
    calendarBody.innerHtml = '';

    var date = new Date(year, month)

    mesAtual.textContent = nomeMes[date.getMonth()] + '' + date.getFullYear();
}
  
  
