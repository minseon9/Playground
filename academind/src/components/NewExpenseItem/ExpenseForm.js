import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [input, setInput] = useState({
        title: '',
        amount: '',
        date: '',
    })
    const onTitleChangeHandler = (event) => { setInput((prevState)=>{ return { ...prevState, title: event.target.value } }) }
    const onAmountChangeHandler = (event) => { setInput({ ...input, amount: event.target.value }); }
    const onDateChangeHandler = (event) => { setInput({ ...input, date: event.target.value }); }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: input.title,
            amount: input.amount,
            date: new Date(input.date)
        }

        props.onSaveExpenseData(expenseData);
        setInput({
            title: '',
            amount: '',
            date: '',
        })
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={input.title} onChange={onTitleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={input.amount} min="0.01" step="0.01" onChange={onAmountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={input.date} min="2019-01-01" max="2022-12-31" onChange={onDateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;