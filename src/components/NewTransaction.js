import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
  
  const NewTransaction = () =>  {
    const { createTransaction } = useContext(GlobalContext);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const transaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount
        }
        createTransaction(transaction);
    }

	return (
	  <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
	  </>
	);
  }
  
  export default NewTransaction;
  