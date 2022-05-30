
    var boton = document.getElementById('rdo');
    var lista = document.getElementById('precio');
    var checks = document.querySelectorAll(".valores");
    boton.addEventListener('click',function(){
        lista.innerHTML = "";
        checks.forEach((e)=>{
            if(e.checked == true){
                var elemento = document.createElement("li");
                elemento.className = "precio-lista-item";
                elemento.innerHTML = e.value;
                lista.appendChild(elemento);

            }
        });
    });
