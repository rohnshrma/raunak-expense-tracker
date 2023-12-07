import React from 'react'

const ExpenseItem = (props) => {

  const clickHandler = ()=>{
    props.onDelete(props.id)
  }

  return (
    <div className='expense_box'>
        <div className="expense_name">{props.name}</div>
        <div className="expense_amount">{props.amount}</div>
        <a href="#" onClick={clickHandler}><i className="fa-solid fa-trash-can"></i></a>
    </div>
  )
}

export default ExpenseItem