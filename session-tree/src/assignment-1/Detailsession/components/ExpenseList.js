const ExpenseList = (props) => {
  const { Expenses } = props;
  return (
    <>
      {Expenses.map((expense) => {
        return (
          <div>
            <span style={{ margin: "8px 8px", border: "1px solid black" }}>
              {expense.date}
            </span>{" "}
            <span style={{ margin: "8px 8px", border: "1px solid black" }}>
              {expense.name}
            </span>{" "}
            <span style={{ margin: "8px 8px", border: "1px solid black" }}>
              {expense.amount}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default ExpenseList;
