import FilterBar from "./FilterBar";

const MonthStatistic = (props) => {
  const { Expenses } = props;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const caculaterExpenseAmount = (expenseAmount) => {
    return expenseAmount.reduce((total, Expense) => {
      return total + Number(Expense.amount);
    }, 0);
  };

  const totalExpenseAmount = caculaterExpenseAmount(Expenses);

  const getMonthPercentage = (month) => {
    const monthExpense = Expenses.filter((expense) => {
      const expenseMonth = new Date(expense.date).getMonth() + 1;
      return expenseMonth === Number(month);
    });
    return (caculaterExpenseAmount(monthExpense) / totalExpenseAmount) * 100;
  };

  return (
    <div style={{ display: "flex" }}>
      {monthNames.map((month, idx) => {
        <FilterBar label={month} percenstage={getMonthPercentage(idx + 1)} />;
      })}
    </div>
  );
};

export default MonthStatistic;
