addEventListener(`DOMContentLoaded`, (e)=> {
    //Definiendo las variables
    let nombre = "Leidy Carolina Gomez Cala";
    let edad = 30;
    let mascotas = true;
    let pasatiempos="patinaje, lectura, caminatas";
    let experiencia;
    let estado_civil = null;

    // definiendo un objeto
    let Persona = {
        v_nombre : nombre,
        v_edad : edad,
        v_mascota : "Perro",
        v_pasatiempos : pasatiempos,
    }
   
    
    //Mostrando la informacion de las variables en pantalla
    confirm("Deseas ver la informacion de: " + nombre);
    alert(`Tiene ` + edad + ` años de edad`);
    alert(`Sus pasatiempos son: ` + pasatiempos);
    if(mascotas){
        alert(`Tiene una mascota`);
    }
    alert(`Su experiencia es: ` + experiencia);
    alert(`Su estado civil es: ` + estado_civil);

    //Mostrando un objeto
    document.querySelector("body").innerHTML = "<b>Mi Nombre es " + Persona.v_nombre
    + "<br>Mi edad es " + Persona.v_edad + " años.<br> Tengo de mascota un " + Persona.v_mascota
    "<br>Mis pasatiempos son " + Persona.v_pasatiempos + "</b>";
})