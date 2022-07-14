import ExpenseItem from "./ExpenseItem";
import './index.css'

function Expenses({ expenseList }) {
  const expenseItems = expenseList.map((expenseItem) => <ExpenseItem expenseItem={expenseItem} />)
  return <div className="expenses">{expenseItems}</div>
}

export default Expenses;