/* condition переменная
let age = prompt("How old?", " ");
let ageCheck = (age >= 18) ? "Allow" : "Do not allow";
alert(ageCheck);
*/


/*
  * Описание задачи: Напишите функцию, которая проверяет, 
  * является ли элемент именно простым объектом, а не массивом, null и т.п.
  * Ожидаемый результат: 
  * true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
*/

let target = { a: 1 };
//Obj_Check(target);

/*function Obj_Check(target){
    let targettype = typeof(target); //Записываю тип данных цели проверки
    if (targettype === "object", !Array.isArray(target))
    { console.log("This is an object")} //Строгая проверка по типу
    else {console.log("This is not an object")};
*/

function Obj_Check(){ //По условию задания могу обойтись проверкой на массив?
    let Checkin = (!Array.isArray(target)) ? "This is an obj" : "This is not an obj";
    console.log(Checkin);
}

/**
  * Описание задачи: Напишите функцию, которая возвращает 
  * вложенный массив вида `[[key, value], [key, value]]`.
  * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
  */
 

let storage = { a: 1, b: 2 };
make_pairs(storage);

function make_pairs(){
    let nested_arr = [[]];//Новый локальный массив
    for (let key in storage){//Иду по ключам в исходном массиве
        var cash = [key, storage[key]];
        nested_arr[0].push(cash);//Пуш пары ключ-значение в новый массив
    }
alert(nested_arr);
}

/*let arrr = [[]];
arrr[0].push(10, "sdsdsd");
console.log(arrr[0]);*/