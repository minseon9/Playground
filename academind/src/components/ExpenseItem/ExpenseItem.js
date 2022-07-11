import './index.css'

function ExpenseItem({ expenseItem: { date, title, amount }}) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en-US', { month: "long"});
  const day = date.toLocaleDateString('en-US', { day: "numeric"});

  return <div className="expense-item">
    <div className="expense-item__date">
      <span>{year}</span>
      <span>{month}</span>
      <span>{day}</span>
    </div>
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price"> ${amount} </div>
    </div>
  </div>
}

export default ExpenseItem;