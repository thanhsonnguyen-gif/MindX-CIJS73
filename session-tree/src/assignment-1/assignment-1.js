import "./assignment-1.css";
import AddExpense from "./AddExpenseSession/addExpense";
import Detail from "./Detailsession/Detail";
import {useState} from 'react'

const ExpenseApp = () => {

  const [expense, setExpense] = useState([
    {
      name: 'some book',
      amount: 50,
      date: '2022-04-11'
    }
  ])

  const handleAddNewExpense = (NewExpense) => {
    console.log(NewExpense);
    setExpense ([
      ...expense,
      NewExpense,
    ])
  }

  return (
    <>
      <AddExpense onAddNewExpenseInfo={handleAddNewExpense}/>
      <Detail Expenses={expense}/>
    </>
  );
};

export default ExpenseApp;
