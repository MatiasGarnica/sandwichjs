
    var boton = document.getElementById('rdo');
    var lista = document.getElementById('lista');
    var checks = document.querySelectorAll(".valores");
    boton.addEventListener('click',function(){
        lista.innerHTML = "";
        checks.forEach((e)=>{
            if(e.checked == true){
                var elemento = document.createElement("li");
                elemento.className = "lista-item";
                elemento.innerHTML = e.value;
                lista.appendChild(elemento);

            }
        });
    });

function Resultado(){
        document.getElementById("precio").innerHTML = "El precio a pagar es de: $1.000";
        
}