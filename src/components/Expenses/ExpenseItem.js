import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//we just use single parameter, that is a object that holds all the recieved properties as attributes
function ExpenseItem(props) {
  //default events start with on
  //this thing adds a event listeners, for onclick event
  //static objects
  //<component/> no need to specify both opening and closing tags if there is no data in between
  console.log("inside expenseItem");
  console.log(props.title);

  const [titlex, setTitle] = useState(props.title);
  console.log(titlex);
  const clickHandler = () => {
    setTitle("updated");
    console.log(titlex);
  };

  return (
    //we can output the js code using {} curls

    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{titlex}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
