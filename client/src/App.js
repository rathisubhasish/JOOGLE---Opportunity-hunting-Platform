// importing modules
import './App.css';

// importing components
import {Header, Brochure, Particles} from "./components/components";
// importing views
import {trial} from "./a";

function App() {
  return (
    <div className="App">
        <Particles />
        <Header />
        <Brochure ans={trial}/>
    </div>
  );
};

export default App;
