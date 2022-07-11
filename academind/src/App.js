import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

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
      <ExpenseItem expenseItem={expenses[0]}/>
      <ExpenseItem expenseItem={expenses[1]}/>
      <ExpenseItem expenseItem={expenses[2]}/>
      <ExpenseItem expenseItem={expenses[3]}/>
    </div>
  );
}

export default App;
