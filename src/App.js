import React, {useState, useEffect} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE = [
  {
    id: 1,
    date: "Wed Dec 29 2021 01:33:36 GMT+0530 (India Standard Time)",
    title: "Food",
    amount: 200
  },
  {
    id: 2,
    date: "Thu Dec 30 2021 01:33:36 GMT+0530 (India Standard Time)",
    title: "Rent",
    amount: 1000
  }
];

const App = () => {
    

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    

    const addExpenseHandler = (expense) => {
        setExpenses([expense,...expenses]);
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>    
    );
}

export default App;