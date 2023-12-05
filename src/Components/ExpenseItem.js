import React from 'react'

const ExpenseItem = (props) => {
  return (
    <div className='expense_box'>
        <div className="expense_name">{props.name}</div>
        <div className="expense_amount">{props.amount}</div>
        <a href="#"><i class="fa-solid fa-trash-can"></i></a>
    </div>
  )
}

export default ExpenseItem