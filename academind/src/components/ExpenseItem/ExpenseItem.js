import React, { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import Card from '../UI';
import './ExpenseItem.css'

function ExpenseItem({ expenseItem: { date, title, amount }}) {
  const [expenseTitle, setExpenseTitle] = useState(title);

  return <Card className="expense-item">
    <ExpenseDate date={date}/>
    <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price"> ${amount} </div>
    </div>
    <button onClick={()=> setExpenseTitle('Update!')}>Change Title</button>
  </Card>
}

export default ExpenseItem;