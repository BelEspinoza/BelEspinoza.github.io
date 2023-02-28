//Funcion que me aplica el estil a la opcion seleccionada en el menu y quitarla previo a ser selecionado
function seleccionar(link){
    var opciones = document.querySelectorAll("#links a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez selecionado una opcion en el modo responsive

    var x = document.getElementById("nav");
    x.className = "";
}
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
} 

//detecto el scrolling para aplicar la animacion de las barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica dicha animacion de la barra de habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("Css").classList.add("barra-progreso266666666666666666666666666666666666666666666666");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("Wordpress").classList.add("barra-progreso4");
        document.getElementById("Photoshop").classList.add("barra-progreso5");
    }
}