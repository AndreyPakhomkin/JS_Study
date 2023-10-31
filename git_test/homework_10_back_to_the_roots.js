//types
// null undefined number big int string symbol object

console.log(typeof a);

var a = [1, 2, 3]; //всплывет наверх, консол отработает
let b = a;

b.push(4);

let c = [1, 2, 3, 4];
console.log("a", a);

console.log(a === b); //true
console.log(b === c); //false

//Строки и числа
//________________________________________

console.log(1 + "2"); //12 string
console.log("" + 1 + 0); //10 string
console.log(1 + 0 + ""); //1
console.log("" - 1 + 0); //-1
console.log("3" * "3"); //9 приведет к number и умножит
console.log("42px" - 2); //NaN
console.log(false + 3); //3
console.log(true + 3); //4

console.clear();

// == vs ===
//________________________________________

//Двойное равно сравнивает значение с приведением типов, а тройное - значения без приведения!
console.log(2 === "2"); // false: number <> string
console.log(2 == "2"); // true number = number
console.log("0" == false); //true: string ->number = 0

console.clear();

//scope: глобальный и локальный
//________________________________________

//var - глобал или функциональная!
//let и const - глобал или блочная!

//Если переменная опр-на выше функции, то она для нее доступна, тк эта ф нах-ся в том же скоупе
function funcA() {
  let a = 1;

  function funcB() {
    //функция В находится в скоупе функции А и видит а
    let b = 2;

    function funcC() {
      //функция С нах-ся в скоупе функции В и видит b и а
      let c = 3;

      console.log("funcC:", a, b, c);
    }

    funcC();
    console.log("funcB:", a, b);
  }

  funcB();
  console.log("funcA:", a);
}

funcA(); //ф А не видит переменные b и с

console.clear();

//hoisting - всплытие
//________________________________________

//console.log(sum(4, 3)); //вызвал до определения, и все сработало

function sum(a, b) {
  return a + b;
}

//console.log(sum(4, 3));

//console.log(num1);//undefined
//console.log(num2);//ReferenceError
//console.log(num3);//ReferenceError

// var num1 = 1;
// let num2 = 2;
// const num3 = 3;

// let num1;

// console.log(num1);

// num1 = 1;

//вызов var и let до присв знач дает undefined
//вызов const до присв знач просит присвоить знач при объявлении

//Function Expression и Function Declaration
//________________________________________

//console.log(square(4));

//Function Declaration можно вызвать до описания

// function square(num) {
//   return num ** 2;
// }

//Function Expression - запись функции в переменную, которая не всплывает

const square = function (num) {
  return num ** 2;
};

console.clear();

//let и const
//________________________________________

let d = "var d";
let e = "var e";
//создаю новый scope:
{
  d = "varvar d"; //значение d перезаписывается из глобал скоупа
  let e = "varvar e"; // новая e не зависит от двойника в глобале
  console.log("scope", d);
  console.log("scope", e);
  let f = "ss";
}

console.log("scope", d); //varvar d перезаписанная
console.log("scope", e); // var e
//console.log(f); //is not defined тк определена в локальном скоупе и не видна снаружи

console.clear();

const PORT = 8000;
const array = ["Javascript", "is", "awesome"];
array.push("!");
array[0] = "JS";
//console.log(array);

// const obj = {};
// obj.name = "Andrey";
// obj.age = 25;

//console.log(obj);

//clousurs - замыкания - когда функция имеет доступ к переменным из вышестоящего скоупа
//________________________________________
function sayHiTo(name) {
  const message = "Hi " + name;
  return function () {
    //эта функция использует переменную message из вышестоящего скоупа
    console.log(message);
  };
}

const hiToOleg = sayHiTo("Oleg");
//hiToOleg();

//________________________________________

function frameWorks() {
  const hw = ["Angular", "React", "Vue"]; //записываю локальную переменную
  return {
    //возвращаю объект с методами взаимодействия с локальной перем-ной
    print: function () {
      console.log(hw.join(" "));
    },
    add: function (framework) {
      hw.push(framework);
    },
  };
}

const manager = frameWorks(); //записываю функцию в глобал перем-ю для доступа к методам
// manager.print();
// manager.add("Baza");
// manager.print();
//console.log(hw);//is not defined т.е. "снаружи" вышеописанной функции hw недоступна

//setTimeout
//________________________________________

const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }

// for (var i = 0; i < fib.length; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(`fib[${j}] = ${fib[j]}`);
//     }, 1500);
//   })(i);
// }

//iife - Immediate Invoked Funnction Expression
//________________________________________

let result = [];
// for (var i = 0; i < 5; i++) {
//   result.push(function () {
//     console.log(i);
//   });
// }
// result[4](); //5 по всем индексам

for (var i = 0; i < 7; i++) {
  (function (j) {
    //оборачиваю тело цикла в функцию, в которой замыкаю i на j
    result.push(function () {
      console.log(j);
    });
  })(i);
}
//result[6]();

//context - не то же самое, что scope
//________________________________________

//scope указывает на видимость переменных
//context указывает на то, как была вызвана функция

const person = {
  surname: "Stark",
  knows: function (what, name) {
    //this ссылается на person, тк ф описана в контексте этого объекта
    console.log(`You know ${what}, ${name} ${this.surname}`);
  },
};

// person.knows("everything", "Bran");

// //Добавляю новый объект
// const john = { surname: "Snow" };

// //Вызываю метод прошлого объекта knows, но с помощью call присваиваю ему новый контекст john
// //call ES6 (новый контект, параметр1для ориг-го метода, параметр2 для ориг-го метода)
// person.knows.call(john, "nothing", "John");
// //В этом случае ключ слово this указывает на новый переданный контекст john

// //apply возвращает аналогичный результат, но вместо перечисления арг-в принимает массив из них
// person.knows.apply(john, ["nothing", "John"]);

// //bind работает так же, как call и apply, но не вызывает функцию из person, а создает новую
// const bound = person.knows.bind(john, "nothing", "John");
// bound();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

//const elena = new Person("Elena", 20); // elena = this

//Binding с явной передачей параметров
//Создал самостоятельную функцию logThis и вручную передал ей в качестве параметра объект obj2
function logThis() {
  console.log(this);
}

const obj2 = { num: 42 };
// logThis.apply(obj2);
// logThis.call(obj2);
// logThis.bind(obj2)();

//Binding с неявной передачей параметров
//В объекте уже лежит метод-функция с привязкой this, которая вызывается в контексте объекта
const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  },
};

//animal.logThis();

//Стрелочные функции
//Не создают собственный контекст
// function Cat(color) {
//   this.color = color;
//   console.log("This", this);
//   (() => console.log("Arrow this", this))();
// }

// new Cat("black");

//New
//________________________________________
// //Возвращает объект
function Cat(color, name) {
  //Создаю класс Cat
  this.color = color;
  this.name = name;
}

const cat = new Cat("black", "Barsik"); //Создается новый пуст объект, вып тело ф, возращ this

function myNew(constructor, ...args) {
  //...args пишу вместо перечисления всех аргументов
  const obj3 = {};
  Object.setPrototypeOf(obj3, constructor.prototype);
  return constructor.apply(obj3, args) || obj3; //args позволяет передать любое количество арг
}

const cat2 = myNew(Cat, "red", "Murzik"); //передаю класс Cat в качестве конструктора
console.log(cat2);

console.clear();

//New - функция-конструктор, смысл которого упростить многократное создание объектов
//________________________________________
// const cat = new Cat();
// console.log(cat);

//Prototypes
//________________________________________
//Каждый объект имеет свой прототип от родительского элемента
// __proto__
//Object.getPrototypeOf()

function Dog(name, color) {
  this.name = name;
  this.color = color;
}

Dog.prototype.voice = function () {
  console.log(`Dog ${this.name} says Whoof`);
};

const dog = new Dog("Tuzik", "brown");
//console.log(Dog.prototype);

//dog.voice();

//________________________________________
function Person1() {}
Person1.prototype.legs = 2;
Person1.prototype.skin = "white";

const person1 = new Person1();
person1.name = "Andrey";

// console.log("skin" in person1); //in проверяет наличие свойства 'skin' В ОБЪЕКТЕ ИЛИ ПРОТОТИПЕ
// console.log(person1.legs);

//console.log(person1.hasOwnProperty("name")); //есть ли свойство У САМОГО ОБЪЕКТА

//Object.create()
//________________________________________
const proto = { year: 1999 };
const myYear = Object.create(proto); //Передаем объект-прототип, затем свойства для нового объекта

myYear.year = 2222;

//console.log(myYear.year);
// console.log(myYear.hasOwnProperty("year"));//false тк свойство 'year' наследуем от прототипа
// console.log(myYear.__proto__ === proto); //true

//Асинхронность
//________________________________________
const first = () => console.log("first");
const second = () => console.log("second");
const third = () => console.log("third");

first(); //1
second(); //2
third(); //3

first(); //1 Добавляет в колстек, выполняет, удаляет из колстека

setTimeout(second, 0); //3 Видит таймаут, отправляет задачу на внеш апи, удаляет из колстека

third(); //2 Добавляет в колстек, выполняет, удаляет из колстека
//Тем временем, апи видит нулевой таймаут и добавляет second в callbackQueue-очередь
//Когда колстек пустеет, инветлуп закидывает в него second из callbackQueue
//Second исполняется и удаляется из колстека

setTimeout(first, 3000);
setTimeout(second, 2000);
setTimeout(third, 1000);
