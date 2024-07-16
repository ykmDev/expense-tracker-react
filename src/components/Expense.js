import { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';

  const Expense = () =>  {
    const { transactions } = useContext(GlobalContext);
    const expenseTotal = transactions
        .map(transacton => transacton.amount)
        .filter(amount => amount < 0)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2);
	return (
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expenseTotal}</p>
        </div>
	);
  }
  
  export default Expense;
  