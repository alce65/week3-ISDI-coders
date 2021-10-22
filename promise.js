function makeAsync(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = parseInt(Math.random() * 10);
      if (n > 5) {
        resolve(n);
      } else {
        reject(new Error(`Error num. ${n}`));
      }
    }, time);
  });
}

function calculate(x) {
  const result = x * 2;
  console.log(`${x} por 2:`, result);
}

makeAsync(1000)
  /* .then((x) => {
    const result = x * 2;
    console.log(`${x} por 2:`, result);
  }) */
  .then((x) => {
    calculate(x);
  })
  .catch((err) => {
    console.log(err.message);
  });

(async () => {
  try {
    const x = await makeAsync(2000);
    const result = x * 2;
    console.log(`${x} por 2:`, result);
  } catch (err) {
    console.log(err.message);
  }
})();

async function add(a, b) {
  return a * b;
}

add(3, 4).then((x) => {
  console.log('X vale', x);
});
