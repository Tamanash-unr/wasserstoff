import './App.css';
import Navbar from './components/Navbar/Navbar';
import Overview from './pages/overview';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Overview />
      </div>
      <Footer />
    </div>
  );
}

export default App;
