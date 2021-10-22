(function makeAsync(a) {
  const x = 23;
  setTimeout(() => {
    console.log(x * a);
  }, 2000);
  console.log('Fin');
})(2);

function sample(a) {
  let x = 23;
  x = Math.log(x);
  console.log(x * a);
  console.log('Fin');
}

sample(3);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`i value is ${i}`);
  }, 1000 * i);
}

for (let i = 0; i < 3; i++) {
  ///let
  setTimeout(() => {
    console.log(`i value with let is ${i}`);
  }, 1000 * i);
}
