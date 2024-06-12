import Navbar from './Components/NavBar/navbar';
import Intro from './Components/Intro/intro'
import AboutMe from './Components/AboutMe/AboutMe';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <AboutMe/>
    </div>
  );
}

export default App;
