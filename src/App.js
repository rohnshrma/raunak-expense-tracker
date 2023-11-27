import './App.css';
import AddExpense from './Components/AddExpense';
function App() {
  return (
    <div className="App">
      <div className="app-header container">
        <h1>Expense Tracker</h1>
      </div>
      <AddExpense />
    </div>
  );
}

export default App;
