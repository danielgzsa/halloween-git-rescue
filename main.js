// The Halloween Commit
// Sistema de seguridad de la sala de servidores

let servidor = "activo";
let alarma = "proteccion maxima contra fantasmas";

console.log("Estado del servidor: " + servidor);
console.log("Sistema de alarma: " + alarma);

let accesoAutorizado = true;

if (accesoAutorizado) {
    console.log("Acceso autorizado a la sala de servidores");
} else {
    console.log("ALERTA: acceso no autorizado");
}