const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date(1991, 4, 11);
console.log(fechaNacimiento);

const comparaFecha = fechaHoy > fechaNacimiento;
console.log(comparaFecha);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

const anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);