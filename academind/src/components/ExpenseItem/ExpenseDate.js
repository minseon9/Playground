import './ExpenseDate.css'

function ExpenseDate({ date }) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString('en-US', { month: "long"});
  const day = date.toLocaleDateString('en-US', { day: "2-digit"});

  return <div className="expense-date">
    <span className="expense-date__month">{month}</span>
    <span className="expense-date__year">{year}</span>
    <span className="expense-date__day">{day}</span>
  </div>;
}

export default ExpenseDate;