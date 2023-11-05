// №1 palindrome

// function palindrome(str) {
//   str = str.toLocaleLowerCase();
//   let str1 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     str1 = str1 + str[i];
//   }
//   console.log(str1);
//   console.log(str === str1);
// }

// let str = "aNAna";

// palindrome(str);

// function palindrome(str) {
//   str = str.toLowerCase();
//   console.log(str);
//   //str.split('') превращает строку в массив по заданному разделителю
//   //.reverse() переворачивает массив
//   //join()
//   console.log(str === str.split("").reverse().join(""));
// }

//#2 Постановка

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// let num = 7;
// fizzBuzz(num);

//#3 Анаграмма

//1 Привести оба слова к регистру
//2 Убрать все "не буквы"
//3 Превратить строки в массивы
//4 Записать оба слова в объекты вида 'буква': кол-во повторений
//5 Сравнить два объекта между собой

//
function anagram(wordOne, wordTwo) {
  //1
  wordOne = wordOne.toLowerCase();
  wordTwo = wordTwo.toLowerCase();
  //2
  wordOne = wordOne.replace(/[^a-zA-Z]+/g, "");
  wordTwo = wordTwo.replace(/[^a-zA-Z]+/g, "");
  //3
  wordOne = wordOne.split("");
  wordTwo = wordTwo.split("");
  //4 Посчитать кол-во для каждой буквы в массиве и записать {букву : кол-во}
  let objOne = makeObj(wordOne);
  let objTwo = makeObj(wordTwo);

  console.log(JSON.stringify(objOne));
  console.log(JSON.stringify(objTwo));
  //5 Сравнить полученные объекты
  let res = compare(objOne, objTwo);
  console.log(res);
}

function makeObj(word) {
  let localObj = {};
  let count = 0;
  //Беру букву из массива
  for (let i = 0; i < word.length; i++) {
    //Ищу повторения этой буквы
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        count = count + 1; //Увеличиваю счетчик повторений если такие есть
        localObj[word[i]] = count; //Вставляю в объект по ключу "буква" св-во "счетчик"
      }
    }
    count = 0; //Обнуляю счетчик для новой буквы
  }
  return localObj;
}

function compare(obj1, obj2) {
  //Сравниваю длину массивов из ключей полученных объектов(если не равны, false)
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  //Захожу в первый объект
  for (let key in obj1) {
    //Сравниваю свойства по такому же ключу во втором объекте
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  //Если обе проверки пройдены, объекты равны, т.е. два слова - анаграммы
  return true;
}

const wOne = "iF!!Firiendi";
const wTwo = "FiriieiFn@!@d";

anagram(wOne, wTwo);
