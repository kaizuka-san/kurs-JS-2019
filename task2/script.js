'use strict'

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату: YYYY-MM-DD"),
    query, answer;

var expenses = {};

let appDate = {
        money: money,
        time: time,
        expenses: expenses,
        optionalExpension: {},
        income: {},
        savings: false
    };


let optionalExpensis = {"Ваш бюджет на 1 день ": money / 30};
let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     cnsole.log(num);
//     num++;
// } while (num < 55)

for (let i = 0; i < 5; i++) {
    query = prompt("Введите обязательную статью расходов в этом месяце"),
    answer = +prompt("Во сколько обойдется?");

    if (optionalExpensis < 100) {
        continue;
    } else {
        expenses[query] = answer; 
        console.log(expenses);
    }

}