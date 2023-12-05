import { useState } from 'react';
import './App.css';
import AddExpense from './Components/AddExpense';
import ExpenseList from './Components/ExpenseList';
import ExpenseHeader from './Components/ExpenseHeader';
function App() {


  const [expenses , setExpenses] = useState([])


  const AddExpenseHandler = (data) => {
  setExpenses((prevExpenses)=>{
    return [data,...prevExpenses]
  })
  }


  return (
    <div className="App c">
      <div className="app-header container">
        <h1>Expense Tracker</h1>
      </div>
      <AddExpense onAdd= {AddExpenseHandler} />
      <ExpenseHeader all_expenses={expenses} />
<ExpenseList all_expenses={expenses}/>


    </div>
  );
}

export default App;
