//1 Переверните число задом наперед

function rewerseNumber(){
    let num  = prompt("num?", " ");
    let rewersednum = "";
        for (let i = num.length - 1; i > -1; i--){
            rewersednum += num[i];
        }
        console.log(rewersednum);
}

//rewerseNumber();


//2 Проверьте, является ли переданная строка палиндромом или нет

function check_Palindrome(){
    let user_string  = prompt("num?", " ");
    let resersed_string = "";

    for (let i = user_string.length - 1; i > -1; i-- ){
        resersed_string += user_string[i];
    }

    if (user_string.toLowerCase() == resersed_string.toLowerCase()){
        console.log("Строка является палиндромом");
    }
        else {
            console.log("Строка не является палиндромом");
        }
}
check_Palindrome();
