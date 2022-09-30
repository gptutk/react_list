import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
//if we output an array of JSX elements, then react is capable of rendering those.
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(" inside Expenses");
  console.log(props.items);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterchangeHandler}
        />
        {props.items.map((exp) => (
          <ExpenseItem
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          ></ExpenseItem>
        ))}
        {/* <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>  */}
      </Card>
    </div>
  );
}

export default Expenses;
