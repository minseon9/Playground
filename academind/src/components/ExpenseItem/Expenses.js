import ExpenseItem from "./ExpenseItem";

function Expenses({ expenseList }) {
  const expenseItems = expenseList.map((expenseItem) => <ExpenseItem expenseItem={expenseItem} />)
  return <div>{expenseItems}</div>
}

export default Expenses;