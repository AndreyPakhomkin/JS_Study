// 1
let string1 = "Hello", num = 3, bool = true;
console.log(string1, typeof string1, num, typeof num, bool, typeof bool);

//2
let num1 = 1;
let num2 = 2;
console.log (num1+num2, num1-num2, num1/num2, num1*num2);

//3
let Num = 12, string2 = "21";
console.log (Num + string2, Num + Number(string2));

//4
let name_surname = "Andrey Pakhomkin";
console.log (name_surname.length);

    for ( let i = 0 ; i < name_surname.length; i ++) {
        console.log (name_surname[i]);
    };

//5
let side = 5;
console.log (" Perimeter is ", side * 4, "\n", "Square is", Math.pow(side, 2), "\n", "Diagonal is", Math.sqrt(2*Math.pow(side,2)));

//6
let string3 = "Super", string4 = "power";
console.log (string3 + " " + string4);

//7
let massive = [1, 2, 3, 4, 5]
let sum = 0;
let minn = Math.min(...massive);
let maxx = Math.max(...massive); 
    for (let i = 0; i < massive.length; i ++){
        sum = sum + massive[i];
    }
console.log (" Elements sum is ", sum, "\n", "Min element is ", minn, "\n", "Max element is ", maxx);

//8
let massive2 = [6, 7, 8, 9, 10];
let massive3 = [];
    for (let i = 0; i < massive2.length; i ++){
        //massive2[i] **= 2
        let sqrm = Math.pow(massive2[i], 2);
        massive3.push(sqrm);
        //massive3.push(massive2[i] **= 2);
    }
console.log (massive3);


//9
let massive4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let massive5 = massive4.slice();
    for (let i = 0; i < massive5.length; i ++){
        if (massive5[i] % 2 !== 0)
            massive5.splice(i, 1);
    }
console.log (massive5);

//10
let a = 3, b = 8, c = 2;
let d = b * b - 4* a * c;
let r1, r2;
    if (d > 0){
        r1 = (-b + Math.sqrt(d))/(2 * a);
        r2 = (-b - Math.sqrt(d))/(2 * a);
        console.log ("Root 1 is", r1.toFixed(2), "Root 2 is", r2.toFixed(2));
    }
    if (d == 0){
        r1 = (-b)/(2 * a);
        console.log ("Root is", r1.toFixed(2));
    }