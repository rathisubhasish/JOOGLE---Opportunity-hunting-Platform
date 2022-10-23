// importing modules
import './App.css';

// importing components
import 
{
  Header, 
  Brochure, 
  Particles,
  CardItem,
  LoginForm,
  SignupForm,
  Filter
} from "./components/components";

// importing views
import {trial} from "./a";

function App() {
  return (
    <div className="App">
        {/* <Particles /> */}
        <Header />
        <Filter />
        {/* <Brochure ans={trial}/> */}
        {/* <Achievement /> */}
    </div>
  );
};

export default App;
