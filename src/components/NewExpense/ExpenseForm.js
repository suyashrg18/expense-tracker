import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const setTitleHandler = event => {
        setTitle(event.target.value)
    }

    const setAmountHandler = event => {
        setAmount(event.target.value)
    }

    const setDateHandler = event => {
        setDate(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={setTitleHandler} value={title} />
                </div>
            </div>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={setAmountHandler} value={amount} />
                </div>
            </div>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" onChange={setDateHandler} value={date} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;