const { PI, random } = Math;

console.log(PI);
console.log(random());

// rest operator
function totalize(...rest) {
  return rest.reduce((a, b) => a + b);
}

console.log(totalize(3, 5, 6, 2, 8, 9));

const aData = [2, 3, 4, 5];
console.log(totalize(...aData)); // spread operator

// spread operator para clonar
const aData2 = [...aData];
