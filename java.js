/*let back = false;

document.getElementById('magia').onclick = function(){
    document.getElementById("magia_p").innerHTML = "PUTO EL QUE LEE";
}


document.getElementById('colorr').addEventListener('click', function() {
    back = true;
    document.body.style.backgroundColor = '#FF0000'
    console.log("Back 1");
});

const listaa = document.getElementsByClassName("lista_s");{
    for (let i = 0; i < listaa.length; i++)
    {
        console.log("i++");
        listaa[i].style.backgroundColor = "blue";
    }
}

document.getElementById('suma').addEventListener('click', function(){
    let numeroA = document.getElementById('numero1').value;
    let numeroB = document.getElementById('numero2').value;
    let resultado = suma(parseInt(numeroA),parseInt(numeroB));
    document.getElementById('resul').innerHTML = resultado;
    document.getElementById('res').style.display = 'block';
})

function suma(a,b){
    return a + b;
}*/

var slideSource = document.getElementById('slideSource');{
    slideSource.classList.toggle('fade');
}

var slideSource1 = document.getElementById('slideSource1');{
    slideSource1.classList.toggle('fade');
}

const baner = '{"nombreapellido": "Maximiliano Zamora","fecha": "8/01/1995","doc": "39393562","cuil": "20-39393562-9","dom": "Doctor Matías Ocaña 1327, Las Mariposas, Provincia de La Pampa","nacion": "Argentina","tele": "2489-616525","mail": "maxizamo22@outlook.com"}'
const obj = JSON.parse(baner);
document.getElementById("cv1").innerHTML = "Nombre y apellido: "+obj.nombreapellido;
document.getElementById("cv2").innerHTML = "Fecha de nacimiento: "+obj.fecha;
document.getElementById("cv3").innerHTML = "DNI: "+obj.doc;
document.getElementById("cv4").innerHTML = "CUIL: "+obj.cuil;
document.getElementById("cv5").innerHTML = "Domicilio: "+obj.dom;
document.getElementById("cv6").innerHTML = "Nacionalidad: "+obj.nacion;
document.getElementById("cv7").innerHTML = "Teléfono de contacto: "+obj.tele;
document.getElementById("cv8").innerHTML = "E-mail: "+obj.mail;