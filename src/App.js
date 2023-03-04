import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Mission from './Components/Mission/Mission';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/servoces/Services';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      
      <Home/>
      <About/>
      <Team/>
    </div>
  );
}

export default App;
