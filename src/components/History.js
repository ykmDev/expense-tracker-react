import { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';  
import Transaction from './Transaction';
  const History = () =>  {
    const { transactions } = useContext(GlobalContext);
	return (
	  <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (<Transaction transaction={transaction} key={transaction.id}/>)
            )}
        </ul>
	  </>
	);
  }
  
  export default History;
  