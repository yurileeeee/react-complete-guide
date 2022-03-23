import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

//* 비용 목록을 개수에 따라 동적으로 <ExpenseItem> 렌더링
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // map 사용시 React가 아이템을 구별할 수 있는 key 필요
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
