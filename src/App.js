import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Expense from './components/Expense';
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import { GlobalContextProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header />
        <Balance />
        <div className="inc-exp-container">
          <Income />
          <Expense />
        </div>
        <History />
        <NewTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
