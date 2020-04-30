let money = prompt('Your budget for this month?');
let time = prompt('Enter date in the following formate YYYY-MM-DD', '2020-04-30');



let appData = {
  budget: +money,
  timeData: time,
  expenses: {
    
  }, 
  optionalExpenses: {

  },
  income: [],
  savings: false
};
let expensesQuestion = prompt('What is the mandatory expense this month?');
let expensesAnswer = prompt('What is the amount?');
let expensesQuestion1 = prompt('What is the other expense this month?');
let expensesAnswer1 = prompt('What is the amount?');

appData.expenses[expensesQuestion] = expensesAnswer;
appData.expenses[expensesQuestion1] = expensesAnswer1;


alert(appData.budget/30);