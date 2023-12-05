import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
  return (
    <div className='expense_list container'>
    {
        props.all_expenses.length > 0 ? props.all_expenses.map((expense,index)=>{
            return <ExpenseItem key={index} id={index} name={expense.name} amount={expense.amount} />
        }) : <h2>No Expenses Found</h2>
    }
    </div>
  )
}

export default ExpenseList