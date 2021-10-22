function makeAsync(time, callback) {
  let n;
  setTimeout(() => {
    n = parseInt(Math.random() * 10);
    callback(n);
  }, time);
}

makeAsync(1000, (x) => {
  const result = x * 2;
  console.log(`${x} por 2:`, result);
});

makeAsync(2000, (x) => {
  const result = x / 2;
  console.log(`${x} dividido por 2:`, result);
});
