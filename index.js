for (let i = 1; i = 2; i) {
    let numedad = parseInt(prompt("ingrese su edad"));
    if (numedad < 18){
    alert("no puede constinuar con la encuetras llama a un adulto")
    i=1
} else {
    alert ("puedes continuar");
    i = 2;
    break
}}

let producto1 = parseInt (prompt("ingrese valor del producto 1"))
let producto2 = parseInt (prompt("ingrese valor del producto 2"))
let producto3 = parseInt (prompt("ingrese valor del producto 3"))

alert (resultado = "usted debe abonar" + " " + producto1+producto2+producto3)

if (resultado >= 300) {
    alert ("usted tiene un 20% de decuento, usted abona " + resultado * 0.8)
}