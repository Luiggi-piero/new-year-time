// Obtiene la fecha objetivo
const objective = new Date('Jan 1, 2022 00:00:00').getTime();

function newYear() {
    // Capturar la fecha actual
    var now = new Date().getTime();

    // Define cuanto falta para llegar al objetivo
    difference = objective - now;

    // Representa las unidades del tiempo
    var second = 1000; // milisegundos
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    // Representa cuanto falta en las unidades del tiempo
    var d = Math.floor(difference / day);
    var h = Math.floor((difference % day) / hour);
    var m = Math.floor((difference % hour) / minute);
    var s = Math.floor((difference % minute) / second);

    // Obtiene los elementos del html y agrega contenido
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
}

// LLamar a la funcion cada segundo
setInterval(() => {
    newYear();
}, 1000);