import Expenses from './components/ExpenseItem/index';
import NewExpenseItem from "./components/NewExpenseItem/NewExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 2,
      title: "New Tv",
      amount: 799.49,
      date: new Date(2022, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    }
  ]

  return (
    <div>
      <NewExpenseItem />
      <Expenses expenseList={expenses}/>
    </div>
  );
}

export default App;
