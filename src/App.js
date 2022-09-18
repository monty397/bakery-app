import Header from './components/header/header';
import Offers from './components/offers/offers';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offers />
      <About />
    </div>
  );
}

export default App;
