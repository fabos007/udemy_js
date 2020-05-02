let money, time;

function start() {
  money = prompt('Your budget for this month?', '');
  time = prompt('Enter date in the following formate YYYY-MM-DD', '2020-04-30');

  while (isNaN(money) || money == '' || money == null) {
    money = prompt('Your budget for this month?', '');
  }
}
start();



let appData = {
  budget: +money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('What is the mandatory expense this month?'),
        b = prompt('What is the amount?');

      if ((typeof (a) != null) && (typeof (b) != null) && a != '' && b != '' && a.length < 50 && b.length < 10) {
        console.log('Done');
        appData.expenses[a] = b;

      } else {
        console.log('bad result');
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Everyday budget is ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Min level");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Middle level');
    } else if (appData.moneyPerDay > 2000) {
      console.log('high level');
    } else {
      console.log('invalid ipnput');
    }
  },
  checkSavings: function () {
    if (appData.savings) {
      let save = +prompt('What is the amount of savings?'),
        percent = +prompt('What is the percent of deposit');

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Income from your deposit: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    let optExpenses;
    for (let i = 0; i < 3; i++) {
      optExpenses = prompt('Enter optional expense', '');
      appData.optionalExpenses[i] = optExpenses;

    }
  },
  chooseIncome: function () {
    let items = prompt('What will be the additional income?(Input using coma)', '');

    if (typeof (items) != "string" || items == '' || typeof (items) == null) {
      console.log('missing input');

    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt('Any other income?'));
      appData.income.sort();
    }
    appData.income.forEach((item, i) => {
      alert(`Ways of income include ${i+1}: ${item}`);

    });
  }
};

for (let key in appData) {
  console.log(`Our programm include: ${key} _ ${appData[key]}`)
}