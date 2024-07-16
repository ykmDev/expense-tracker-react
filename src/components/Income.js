import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
  
  const Income = () =>  {
    const { transactions } = useContext(GlobalContext);
    const incomeTotal = transactions
        .map(transaction => transaction.amount)
        .filter(amount => amount > 0)
        .reduce((acc, amount) => (acc += amount), 0).toFixed(2);
	return (
	  <div>
          <h4>Income</h4>
          <p className="money plus">+${incomeTotal}</p>
	  </div>
	);
  }
  
  export default Income;
  