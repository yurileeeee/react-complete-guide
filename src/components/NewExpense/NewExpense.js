import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// 새로운 비용 추가
const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
