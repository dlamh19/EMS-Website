import './App.css';
import StripeContainer from './components/StripeContainer';



function App() {
  return (
    <div class="main" id="stripe-app">
      <div className="App">
        <input type='text'></input>
        <StripeContainer />
      </div>
    </div>
  );
}

export default App;
