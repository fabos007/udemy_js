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


// for(let i = 0; i < 2; i++){
// let a = prompt('What is the mandatory expense this month?'),
//     b = prompt('What is the amount?'); 

//   if ((typeof(a)!= null) && (typeof(b)!= null) && a != '' && b != '' && a.length < 50 && b.length < 10)  {
//     console.log('Done');
//   appData.expenses[a] = b;

//   }else {
//     console.log('bad result');
//     i--;
//   }
// }

// let i = 0;
//   while (i < 2) {
//     let a = prompt('What is the mandatory expense this month?'),
//       b = prompt('What is the amount?'); 

//     if ((typeof(a)!= null) && (typeof(b)!= null) && a != '' && b != '' && a.length < 50 && b.length < 10)  {
//       console.log('Done');
//     appData.expenses[a] = b;
//   }else {
//     console.log('bad result');
//     i--;
//   }
//   i++;
// }

// let i = 0;
// do {
//   let a = prompt('What is the mandatory expense this month?'),
//         b = prompt('What is the amount?'); 
  
//       if ((typeof(a)!= null) && (typeof(b)!= null) && a != '' && b != '' && a.length < 50 && b.length < 10)  {
//         console.log('Done');
//       appData.expenses[a] = b;
//     }else {
//       console.log('bad result');
//       i--;
//     }
//     i++;
// } while (i < 2);


appData.moneyPerDay = appData.budget/30;
alert('Everyday budget is' +  appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
  console.log("Min level");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
  console.log('Middle level');
}else if (appData.moneyPerDay > 2000){
  console.log('high level');
}else {
  console.log('invalid ipnput');
}