/**
  * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
  */

let start_obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
}
//exclude_target(start_obj);

function exclude_target(){
    for (let key in start_obj){
        console.log("{", key, ":", start_obj[key], "}");//Вывожу существующий объект
        }

    let target = prompt("Which property to delete?", " ");//Пользователь выбирает свойство
    delete start_obj[target];
    console.clear();

    for (let key in start_obj){
        console.log("{", key, ":", start_obj[key], "}");//Вывожу объект без выбранного свойства
        }
    }

/*
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true, Можно ли вообще так? Ответ пока не нашел, поэтому null
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
*/

let start_obj_1 = { 
                    a : 2,
                    b : 1,
                    c : 3,
                    };
Check_empty(start_obj_1);

function Check_empty(){
    console.log(Object.values(start_obj_1));
    //Проверка на наличие ключей
    let resKeys = (Object.keys(start_obj_1).length === 0) ? true : false;
    
    if (resKeys === true) { 
        console.log(resKeys) } 

        else {//Проверка на наличие undefined в свойствах
            let resValues = (Object.values(start_obj_1).includes(null)) ? true : false;
            console.log(resValues);
            }
}