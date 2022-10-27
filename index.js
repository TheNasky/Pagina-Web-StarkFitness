let nombre = prompt("Bienvenido a STARKFITNESS, por favor ingrese su nombre");
console.log(nombre)
let actividadDeseada = prompt(`Buenos dias ${nombre}, que actividad te gustaría realizar?`);
console.log(actividadDeseada)
if(actividadDeseada.toLowerCase()==="kickboxing" || actividadDeseada.toLowerCase()==="kick boxing"){
    alert("Las clases de kickboxing son martes y jueves de 18hs a 21hs y el arancel es de $4200")
}else if(actividadDeseada.toLowerCase()==="musculación" || actividadDeseada.toLowerCase()==="musculacion" ){
    alert("Podés venir a realizar musculacíon de lunes a sabado de 8hs a 22hs")
    
}else if(actividadDeseada.toLowerCase()==="telas"){
    alert("Las clases de telas son miercoles y viernes de 18hs a 21hs y el arancel es de $4200")
}else{
    alert("no es posible identificar la actividad especificada")
};

