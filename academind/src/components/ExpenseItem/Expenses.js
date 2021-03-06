import ExpenseItem from "./ExpenseItem";
import Card from "../UI";
import './index.css'

function Expenses({ expenseList }) {
  const expenseItems = expenseList.map((expenseItem) => <ExpenseItem expenseItem={expenseItem} />)
  return <Card className="expenses">{expenseItems}</Card>
}

export default Expenses;