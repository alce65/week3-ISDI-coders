// Patrones de invocación

// Function

function foo() {
  console.log(this);

  function bar() {
    console.log(this);
  }

  bar();
}

foo();

// Method

const obj = {
  text: 'Soy un objeto',
};

function anotherFoo() {
  console.log('Desde anotherFoo', this);
}

/* const anotherFoo = () => {
  console.log('Desde anotherFoo', this);
}; */

anotherFoo();

obj.method = anotherFoo;

obj.method();

// Constructor

const x = new anotherFoo();
console.log(x);

// Applay

const obj2 = new Object();
obj2.text = 'Soy Obj2';
obj2.number = 5;

anotherFoo.call(obj2);

function add(n, m) {
  return this.number + n + m;
}

console.log(add.call(obj2, 7, 10));
console.log(add.apply(obj2, [7, 10]));
