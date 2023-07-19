/**
  * Описание задачи: Напишите функцию, которая сравнивает два объекта.
  * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
  * Сложность задачи: 2 of 5
  */

let obj_1 = { a: 1, b: 1, };
let obj_2 = { a: 1, b: 2, };

//console.log(compare(obj_1, obj_2))

function compare(obj_1, obj_2) {
    
  const str_1 = JSON.stringify(obj_1);//узнал, что такое JSON
  const str_2 = JSON.stringify(obj_2);
  const res = (str_1 === str_2) ? true : false;
  return res;
  /*
  let keys = ((Object.keys(obj_1)).toString() === (Object.keys(obj_2)).toString()) ? true : false; //Ключи => массив => строка 
  let values = ((Object.values(obj_1).toString()) === (Object.values(obj_2).toString())) ? true : false; //Свойства => массив => строка 
  let result = (keys == values == true) ? true : false;
  return result
  */
}

/* Избегание мутации оригинального объекта путем копирования в отдельное место в памяти
const object_1 = {
  a : true,
  b : 2,
  c : "Dima"
}
const copy_object_1 = Object.assign({}, object_1);

copy_object_1.a = false;
copy_object_1.c = "Vasiliy"

console.log(object_1)
console.log(copy_object_1)
*/

/*Избегание мутации оригинального объекта путем разложение на свойства и сборку в новый объект
const object_1 = {
  a : true,
  b : 2,
  c : "Dima"
}
const copy_object_1 = {...object_1};//Оператор ... он же Спред

copy_object_1.a = false;
copy_object_1.c = "Vasiliy"

console.log(object_1)
console.log(copy_object_1)
*/

/*Избегание мутации оригинального объекта путем превращения в строку и парсинга в новый объект
* Этот способ затрагивает вложенные объекты, создает на них новые ссылки
const object_1 = {
  a : true,
  b : 2,
  c : "Dima"
}
const copy_object_1 = JSON.parse(JSON.stringify(object_1));

copy_object_1.a = false;
copy_object_1.c = "Kirill"

console.log(object_1)
console.log(copy_object_1)
*/

/* Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
* Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
*/

