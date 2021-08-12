import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = () => {

    const initState = {
        enteredTitle: '', enteredAmount: '', enteredDate: ''
    }
    const [expenseInput, setExpenseInput] = useState(initState)

    const titleChangeHandler = (event) => {
        setExpenseInput((prevState) => {
            return {
                ...prevState, enteredTitle: event.target.value
            }
        })
    }

    const amountChangeHandler = (event) => {
        setExpenseInput((prevState) => {
            return {
                ...prevState, enteredAmount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setExpenseInput((prevState) => {
            return {
                ...prevState, enteredDate: event.target.value
            }
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        const expenseData = {
            title: expenseInput.enteredTitle,
            amount: expenseInput.enteredAmount,
            date: new Date(expenseInput.enteredDate)
        }

        console.log(expenseData)

        setExpenseInput(initState)
    }


    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'  value={expenseInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={expenseInput.enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={expenseInput.enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm