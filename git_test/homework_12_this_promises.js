// function Hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "andrey",
//   age: 25,
//   sayHello: Hello,
//   sayHelloWindow: Hello.bind(window),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

//this всегда динамично и указывает на объект, в контексте которого его вызвали

const lena = {
  name: "Elena",
  age: 23,
};

//Передача свойств объекта через bind
//bind возвращает новую функцию и передает в копию новый контекст, параметры
//bind не вызывает новую функцию!
// person.logInfo.bind(lena, "frontend", "909292921")();

//call возвращает новую функцию, передает ей новый контекст, параметры и сразу вызывает
// person.logInfo.call(lena, "frontend", "909292921");

//apply возвращ новую ф, передает новый контекст, массив параметров и сразу вызывает
// person.logInfo.apply(lena, ["frontend", "909292921"]);

//Прототипы и контекст

const array = [1, 2, 3, 4, 5];

//умножить каждое значение на число от пользователя
// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }
//array.map вызывает функцию для каждого элемента и возвращ массив результатов
Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

//console.log(array.multBy(2));

//Замыкания
//________________________________________________________

//Функция возвращает другую функцию
//Возращаемая функция имеет доступ с верхнему скоупу

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);
// calc();

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
//console.log(addOne(25));

const addTen = createIncrementor(10); //10 замыкается на возвращаемой ф
// console.log(addTen(25)); //возращаемая ф добавляет num к замкнутым 10

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}${domain}`;
  };
}

const comUrl = urlGenerator(".com");
// console.log(comUrl("google"));
const ruUrl = urlGenerator(".ru");
// console.log(ruUrl("yandex"));

//ЗАДАЧА НА КОНТЕКСТ: написать свою ф bind
//___________________________________________________
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Михаил", age: 25, job: "frontend" };
const person2 = { name: "Елена", age: 19, job: "smm" };

function bind(context, func) {
  return func.bind(context)();
}

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, ...args);
//   };
// }

// bind(person1, logPerson);
// bind(person2, logPerson);

//АСИНХРОННОСТЬ
//_______________________________________________________

// console.log("start");

// console.log("start2");

// function timeOut2sec() {
//   console.log("timeOut2sec");
// }

// window.setTimeout(function () {
//   console.log("Inside timeout 3000");
// }, 3000);

// setTimeout(timeOut2sec, 2000);

// console.log("End");

// function human() {
//   this.name = "Oleg";
// }

// human.prototype.makeAmove = function () {
//   console.log("Шагнул вперед");
// };

// const lena = new human();

// class human {
//   constructor() {
//     this.name = "Oleg";
//   }
//   makeAmove() {
//     console.log("Шагнул вперед");
//   }
// }

// const lena = new human()

// class developer extends human{
//     constructor(){
//     this.salary = '300kk',
//     }
//     work(){
//         console.log('Done.')
//     }
// }

// const vitya = new developer()

// function sayHi(){
//     console.log(this)
// }

// sayHi()

// let sayHello = () => {
//     console.log('hello')
// }

for (var i = 1; i <= 5; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 0);
}
