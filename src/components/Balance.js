import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
  
  const Balance = () =>  {
    const { transactions } = useContext(GlobalContext);
    const balanceTotal = transactions
        .map(transaction => transaction.amount)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2);
	return (
	  <div className='container'>
        <h4>Your Balance</h4>
        <h1>${balanceTotal}</h1>
	  </div>
	);
  }
  
  export default Balance;
  