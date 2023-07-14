console.log("Обычное сообщение");  // Выводит сообщение в консоли
console.info("Такое же обычное сообщение"); // Информационное сообщение
console.error("Сообщение при ошибке"); // Сообщение об ошибке, которую необходимо исправить
console.warn("Предупреждение");// Предупреждеение, исправлять не обязательно

    /*--------------------*/

var num, word, truefalse; // Объявление переменных
num = 5; // Присвоеные переменных
         // var num = 5;
console.log("Переменная: " + num); // Объединение тескта и переменной
num = 7; // Переописание
console.log("Переменная: " + num);
const num2 = 9;
console.log("Константа: " + num2);
word = "wordddd";
console.log(word);
truefalse = true; // или false
    // тип данных в переменной определяется самим значением

    /*--------------------*/

var per1 = 5;
var per2 = 15;
var razn = per2 - per1;
console.log("Разность:" + razn);
console.log("Сумма:" + (per1 + per2)); // и т.д.

var per3 = 2;
per3 += 8; // тоже самое, что и per3 = per3 + 8;
per3++; // тоже самое, что и per3 = per3 + 1;

var per4 = "12";                          //
var per5 = "2";                           // выводит 12 и 2 как строку
console.log("per4+5 " + (per4 + per5));   //

var per6 = Number("12");                  //
var per7 = Number("2");                   // Numder - переводит строковое значение в численное
console.log("per6+7 " + (per6 + per7));   // выдает сумму 14

console.log("Pi: " + Math.PI); // выводит число пи
console.log("Pi: " + Math.min(4,6,7,8,9,0)); // ищет минимальное значение
console.log("Pi: " + Math.max(4,6,7,8,69,0)); // ищет максимальное значение

    /*--------------------*/

var per8 = 8;
if(per8 == 8) {console.log("Ok")} // если (тру) то {}
    else if(per8 !=9) {console.log("Tozhe Ok")} // иначе если то {}
    else {console.log("Ne Ok")}; // иначе {}

var per9 = 9;
var pravda = true;
if(per9 == 9 || pravda == true)  // || - или, && - и
    {console.log("Ok")};

var stroka = "slovo";
switch(stroka) { // свитч() - какую переменную сравниваем
    case "word": // кейс - с чем сравниваеи
        console.log("tut word"); // сообщение при положительном результате
        break;  // окончание кейса
    case "slovo":
        console.log("tut slovo");
        break;
    default: // если ни одно из усллвий не выполнено
        console.log("nichego");}
        
        /*--------------------*/

