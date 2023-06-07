//1 
//Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

let arrint = [1, 4 ,15, 1, 13, 4, 86, 43, 35, 9661];
let summ = 0;
for (let i = 0; i < arrint.length; i ++)
{
    if ( arrint[i] % 2 == 0 )
    {
        summ += Math.sqrt(arrint[i]);
    }
}
console.log(summ.toFixed(2));


