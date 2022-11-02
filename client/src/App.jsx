// importing modules
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { UserContext } from "./UserContext";

// importing components
import { Header} from "./components/components";

//importing APIs functions
import { getUser } from "./api/user";

// importing views
import {
  JOOGLE,
  LOGIN,
  SIGNUP
} from "./views/views";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkUser = getUser()
      .then((res) => {
        if (res.error) console.error(res.error);
        else setUser(res.username);
      })
      .catch((err) => console.error(err));
    return () => checkUser;
  }, [])
  
  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <ToastContainer />
          <Header />
          <Routes>
            <Route exact path="/" element={!user ? <JOOGLE /> : <h2>error</h2>} />
            <Route exact path="/login" element={<LOGIN />} />
            <Route exact path="/SIGNUP" element={<SIGNUP />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
