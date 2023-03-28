import {useState} from "react";
import Card from "../UI";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import './index.css'

function Expenses({ expenseList }) {
  const [filteredYear, setFilteredYear] = useState(2022);
  const filterExpenseItemHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const expenseItems = expenseList.map((expenseItem) => <ExpenseItem expenseItem={expenseItem} />)
  return <Card className="expenses"> <ExpensesFilter selected={filteredYear} onFilterExpenseItem={filterExpenseItemHandler}/> {expenseItems}</Card>
}

export default Expenses;