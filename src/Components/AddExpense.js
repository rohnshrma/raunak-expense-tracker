import React, { useReducer } from 'react'


var initialState = {
    name: "",
    amount: ""
}

const expenseReducer = (state, action) => {

    if (action.type === "NAME_INPUT") {
        return {
            name: action.value,
            amount: state.amount
        }
    }
    if (action.type === "AMOUNT_INPUT") {
        return {
            name: state.name,
            amount: action.value
        }
    }

    return initialState;
}



const AddExpense = (props) => {

    const [expenseState, dispatch] = useReducer(expenseReducer, initialState) // reducer function , initialc state




    const nameChangeHandler = (e) => {
        const nameInput = e.target.value

        dispatch({ type: "NAME_INPUT", value: nameInput })
    }
    const amountChangeHandler = (e) => {
        const amountInput = e.target.value
        dispatch({ type: "AMOUNT_INPUT", value: amountInput })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.onAdd(expenseState)
    }

    return (
        <div className='container add-expense'>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input onChange={nameChangeHandler} type="text" placeholder='Enter Expense Name...' />
                </div>
                <div className="form-group">
                    <input onChange={amountChangeHandler} type="number" placeholder='Enter Expense Amount...' />
                </div>
                {/* <div className="form-group">
                <select name="category" class="form-control">
                    <option>Categories</option>
                    <option value="tranport">Transport</option>
                    <option value="food">Food</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="shopping">Shopping</option>
                    <option value="others">Others</option>
                  
                </select>
                </div> */}
                <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}

export default AddExpense