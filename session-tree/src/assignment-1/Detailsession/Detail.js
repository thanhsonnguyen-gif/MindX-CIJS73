import MonthStatistic from "./components/Monthstatistic";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

const Detail = (props) => {
  const { Expenses } = props;
  const [selecterYear, setSelecterYear] = useState(2020);
  const handleselecterYear = (e) => {
    setSelecterYear(e.target.value)
  }
  const yearExpenses = Expenses.filter((year)=>{
    return new Date (year.date).getFullYear() === Number(selecterYear);
  })

  return (
    <>
      <div>
        <span>Filter by Year</span>
        <select value={selecterYear} onChange={handleselecterYear}>
          {[2020, 2021, 2022, 2023].map((year) => {
            return <option value={year}>{year}</option>;
          })}
        </select>
      </div>
      <MonthStatistic Expenses={yearExpenses} />
      <ExpenseList Expenses={yearExpenses} />
    </>
  );
};

export default Detail;
