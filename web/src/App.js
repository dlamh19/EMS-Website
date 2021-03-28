import './App.css';
import StripeContainer from './components/StripeContainer';

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import HallRental from './components/HallRental'
import HowToJoin from './components/HowToJoin'
import Footer from './components/Footer'
import Donation from './components/Donation'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <HowToJoin />
      <HallRental />
      <Donation />
      <StripeContainer />
      <Footer />
    </div>
  );
}

export default App;
