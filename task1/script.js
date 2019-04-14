'use strict'

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату: YYYY-MM-DD"),
    query = prompt("Введите обязательную статью расходов в этом месяце"),
    answer = prompt("Во сколько обойдется?"),
    expenses = {};

expenses[query] = answer; 

let appDate = {
        money: money,
        time: time,
        expenses: expenses,
        optionalExpension: {},
        income: {},
        savings: false
    };


alert("Ваш бюджет на 1 день " + money / 30);