import './App.css';
import StripeContainer from './components/StripeContainer';


function App() {
  //const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Donate</h1>
      <StripeContainer/>
    </div>
  );
}

export default App;
