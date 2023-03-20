import React from 'react'
import './NewExpenseItem.css'
import ExpenseForm from './ExpenseForm'

const NewExpenseItem = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    props.onAddExpenseItem({
      ...expenseData,
      id: Math.random().toString()
    })
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
}

export default NewExpenseItem;