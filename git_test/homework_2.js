//1
let num1 = 7, num2 = 3;
let rez1 = num1 % num2;
let rez2 = num1 / num2;
console.log(" Ostatok ot deleniya is", rez1, "\n", "Celaya chast is", rez2.toFixed(0));

//2 
let str1 = "Nelzya tak prosto ЖОПА";
let str2 = "vzyat i nachat";
let str3 = "pisat kod";
console.log(str1 + " " + str2 + " " + str3);
console.log(str3.repeat(3));

//3
let str4  = "Давай проверим, будет ли тут слово, которое ты ищешь";
console.log("Наша строка:", str4);
if (str4.indexOf("тут") > -1) {
    console.log("Слово 'тут' найдено по индексу", str4.indexOf("тут")) 
}
    else 
    {console.log("Слово 'тут' не найдено")};

if (str4.indexOf("код") > -1) {
    console.log("Слово 'код' найдено по индексу", str4.indexOf("код"))
}
    else 
    {console.log("Слово 'код' не найдено")};

if (str4.indexOf("ты ищешь") > -1) {
    console.log("Слова 'ты ищешь' найдены по индексу", str4.indexOf("ты ищешь"))
}
    else 
    {console.log("Слова 'ты ищешь' не найдены")};

//4
let str5 = "Нельзя так просто взять и начать писать код";
console.log("Наша строка:", str5);
console.log(str5.replace("Нельзя", "Можно"));

//5
let name1 = "Андрей", age = "24", act = "сижу пержу";
console.log(" Привет, меня зовут", name1, "\n", "Мне", age, "года", "\n", "Сейчас я", act);

//6
let arr1 = ["лес", "медведь", "машина", "пердеж", "лес", "ковер"];

if (str4.indexOf("олень") > -1) {
    console.log("Слово 'олень' входит в массив") 
}
    else 
    {console.log("Слово 'олень' не входит в массив")};

if (str4.indexOf("медведь") > -1) {
    console.log("Слово 'медведь' входит в массив")
}
    else 
    {console.log("Слово 'медведь' не входит в массив")};

console.log(arr1.indexOf("машина"));

let count = 0;
for (let i = 0; i < arr1.length; i ++){
    if (arr1[i] == "лес") {
         count = count + 1;
    }
}
console.log("Слово 'лес' встречается", count, "раз(а)")

arr1.splice(arr1.indexOf("пердеж"), 1);
console.log(arr1);

arr1.push("шашлыки");
console.log(arr1);

let mid = arr1.length / 2; // Решил реализовать поиск середины

console.log(mid, typeof mid);

if (mid % 2 == 0){
    mid = mid;
    console.log(mid, typeof mid);
    arr1.splice(mid, 0, "листья");
    console.log(arr1);
}
else {
    mid = Math.floor(mid + 1);
    console.log(mid, typeof mid);
    arr1.splice(mid, 0, "листья");
    console.log(arr1);
}

//7
let str6 = "Нельзя так просто взять и начать писать код";
let words = str6.split(" ");
console.log(words);
str6 = words.join("+");
console.log(str6);

//8
//8.1 Usual func
//let arr2 = [5,9,9,1,6,-5,-4,-8,1,8,3,7,0,89,56];
//arr2.sort(function(a, b) { return a - b; });
//console.log(arr2);

//8.2 Arrow func
//let arr3 = [5,9,9,1,6,-5,-4,-8,1,8,3,7,0,89,56];
//arr3.sort( (a, b) => (a - b));
//console.log(arr3);

//8.3 full  inverted usual func
let arr5 = [5,9,9,1,6,-5,-4,-8,1,8,3,7,0,89,56];
function Compare(a, b) {
    if (a<b) { return -1}
    if (a==b) { return 0}
    if (a>b) { return 1}
}
arr5.sort(Compare);
console.log(arr5);
function invCompare(a, b) {
    if (a<b) { return 1}
    if (a==b) { return 0}
    if (a>b) { return -1}
}
arr5.sort(invCompare);
console.log(arr5);

//9
let obj1 = {
     key1 : "Строка",
     key2 :  6,
     key3 :  6.2,
     key4 :  false,
     key5 :   [1, 3, 5],
    }
obj1.key6 = "Gachimuchi";
console.log((obj1.key1));
for (key in obj1){
    console.log(key, obj1[key])
}
delete obj1.key2;
console.log(obj1);
obj1.key2 = "Новая строка";
console.log(obj1.key2);

//10
function Sumfun()  {
    let o = prompt("let o", " ");
    let p = prompt("let p", " ");
    console.log (Number(o) + Number(p));
    console.log (Number(o) - Number(p));
}
Sumfun();


