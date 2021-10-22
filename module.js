function creaAgente(nombre) {
  let edad = 20;
  return {
    getNombre: function () {
      return nombre;
    },
    getEdad: function () {
      return edad;
    },
    saluda: function () {
      console.log(`Soy ${nombre} y tengo ${edad} años`);
    },
  };
}

const jones = creaAgente('Jones');
console.log(jones);
jones.saluda();
