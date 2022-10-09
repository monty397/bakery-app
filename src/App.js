import Header from './components/header/header';
import Offers from './components/offers/offers';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Offers />
      <About />
      <Footer />
    </div>
  );
}

export default App;