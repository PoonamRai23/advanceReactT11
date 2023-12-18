// App.js
import React, { useState } from 'react';
import ExpenseDetails from './components/Expenses/ExpenseDetails';
import NewExpense from './components/NewExpenses/NewExpense';

import './components/Expenses/ExpenseItem.css'
import ExpenseItem from './components/Expenses/ExpenseItem';

const App=()=> {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      date: new Date(2023, 9, 13),
      title: "Food",
      amount: 50,
      locationOfExpenditure: "Hotel",
    },
    {
      id: 'e2',
      date: new Date(2023, 9, 13),
      title: "Petrol",
      amount: 100,
      locationOfExpenditure: "Petrol Pump",
    },
    {
      id: 'e3',
      date: new Date(2023, 9, 13),
      title: "Movies",
      amount: 200,
      locationOfExpenditure: "Inox",
    }
  ];
//   const ExpenseItem=(props)=>{
// const title=props.title

// const updatedExpense=()=>{
//   title='100$'
//   console.log(title)
// }
//   }
const addExpenseHandler= expense=>{
 const[expenses,setExpenses]= useState(DUMMY_EXPENSES)
  // console.log("In App.js");
  // console.log(expense)
  setExpenses((prevExpense)=>{
    return[expense,...prevExpense];
  });
};
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );


export default App;
