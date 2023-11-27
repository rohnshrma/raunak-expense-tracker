import React from 'react'

const AddExpense = () => {






    const nameChangeHandler = (e)=>{
        const nameInput = e.target.value
    }
    const amountChangeHandler = (e)=>{
        const amountInput = e.target.value
    }


    return (
        <div className='container add-expense'>
            <form>
                <div className="form-group">
                    <input onChange={nameChangeHandler} type="text" placeholder='Enter Expense Name...' />
                </div>
                <div className="form-group">
                    <input onChange={amountChangeHandler} type="number" placeholder='Enter Expense Amount...' />
                </div>
                <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}

export default AddExpense