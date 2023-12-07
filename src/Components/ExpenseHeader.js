import React from 'react'

const ExpenseHeader = ({all_expenses}) => {


  const total = all_expenses.reduce((sum,expense)=>{
    return sum += parseInt(expense.amount)
  },0)


  console.log(total);

  return (

    <div className='ExpenseHeader container'>

    {all_expenses.length > 0 ? <h2>Total Expenses : {total}</h2> : <h2>Total Expenses : {0}</h2> }

      
      {/* filter */}

    </div>
  )
}

export default ExpenseHeader