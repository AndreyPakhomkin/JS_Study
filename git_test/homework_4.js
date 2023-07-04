//1. Напишите программу на JavaScript для отображения текущего дня и времени в следующем формате.
//Пример вывода: сегодня вторник.
//Текущее время: 22:00:30

let date = new Date; // записываю текущую дату в глобальную переменную
function DayoftheWeek() {
     // выясняю день недели по индексу дня в объекте
    let days = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота'    
        ]
    console.log('Сегодня', days[date.getDay()]);
}

function TimeoftheDay() {
     // беру из даты точное время
    console.log('Текущее время', date.getHours(), ':', date.getMinutes(), ':', date.getSeconds());
}

//DayoftheWeek();
//TimeoftheDay();

//Напишите программу на JavaScript, чтобы найти область треугольника, длина трех сторон которой равна 5, 6, 7
function SGeron(){
    // получаю длины сторон треугольника
    let a = prompt('let a', '');
    let b = prompt('let b', '');
    let c = prompt('let c', '');
    // Нахожу плошадь треугольника по ф Герона
    let halfp = ((Number(a)+Number(b)+Number(c))/2);// нахожу полупериметр
    console.log(Math.pow((halfp*(halfp-a)*(halfp-b)*(halfp-c)), 0.5));
}
//SGeron();

//Напишите программу на JavaScript, чтобы вращать строку «w3resource» в правильном направлении, 
//периодически удаляя одну букву из конца строки и прикрепляя ее к передней части.

let mystr = 'w3resource';
function StringFlip(){
    // удаляю послений символ и вставляю его в начало строки
    for (let i = 0; i < mystr.length; i++){ //вхожу в цикл для переставления символа на каждой итерации
        let caseW = mystr[mystr.length-1]; //беру последний символ
        let caseS = mystr.slice(0, mystr.length-1) //беру остальную часть
        mystr = caseW + caseS; // переопределяю строку с новым порядком символов
        console.log(mystr);
    }
}
StringFlip();