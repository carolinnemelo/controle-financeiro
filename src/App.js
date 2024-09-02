import "./App.css";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { useState } from "react";

function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    
    const newTransaction = {...transaction, id: transactions.length + 1}
    
    setTransactions([...transactions, newTransaction]);
  
  }

	return (
		<div className="App">
			<Header />
			<TransactionList transactions={transactions}/>
      <TransactionForm addTransaction={addTransaction}/>

		</div>
	);
}

export default App;
