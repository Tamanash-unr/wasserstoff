import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <p>Welcome to our website!</p>
      </div>
      <footer>
        <p>This is app footer. </p>
      </footer>
    </div>
  );
}

export default App;
