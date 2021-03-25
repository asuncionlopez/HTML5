alert("Hola Mundo!");

var x = 10 //global scope
let z = 20 //restricted scope (local)
const pi = 3.14 //constante

x = 10 + 2
nombre = " Asunción"
apellidos = " López-Cepero García"

//Por la consola de desarrollo
console.log(x)
console.log(nombre)
console.log(apellidos)

//Lo pinta en la página
document.write("Con document.write --> El resultado es " + x)

//Lo pinta mediante alerta
{
    alert("otra alerta")
    alert("El resultado es: " + x)
}

//Mediante DOM
document.getElementById("p1").innerHTML = "Ya he hecho el cálculo: " + x
document.getElementById("nombre").innerHTML = "Mi nombre es: " + nombre
document.getElementById("apellidos").innerHTML = "Mis apellidos son:" + apellidos


