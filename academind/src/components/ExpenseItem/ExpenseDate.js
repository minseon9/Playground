import './ExpenseDate.css'

function ExpenseDate({ date }) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en-US', { month: "long"});
  const day = date.toLocaleDateString('en-US', { day: "numeric"});

  return <div className="expense-item__date">
    <span>{year}</span>
    <span>{month}</span>
    <span>{day}</span>
  </div>;
}

export default ExpenseDate;