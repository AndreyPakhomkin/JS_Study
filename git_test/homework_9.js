/**
  * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
  * По-русски говоря, принимает объект и путь на свойство в нем, затем применяет сплайс с заданными аргументами.
  * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
  * Сложность задачи: 3 of 5
  * @param {Object} object
  * @param {String} path - путь в объекте
  * @param {String} func - метод массива для исполнения
  * @param {Array} [args] - список аргументов
  * @returns {?}
*/

const invoke = (object, path, func, args) => {

    let dataPath = path.split('.') //Перевожу полученный путь в массив [a, b]

    const target = dataPath.reduce((acc, key) => { //Залезаю в полученный массив через проверку редьюсом
        acc = acc[key] ? acc[key] : object[key]; 
        return acc; //[1, 2, 3]
    }, {}) //передаю в acc пустой объект в первой итерации

    console.log()
    return Array.prototype[func].apply(target, args);
};

const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

//Решение пришлось позаимствовать
