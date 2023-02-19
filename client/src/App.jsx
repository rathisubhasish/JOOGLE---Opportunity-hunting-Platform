// importing modules
import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { UserContext } from "./UserContext";

// importing components
import { Error, Header,  ScrollUp } from "./components/components";

//importing APIs functions
import { getUser } from "./api/api";

// importing views
import {
  JOOGLE,
  LOGIN,
  SIGNUP,
  EXPLORE,
  ADDPOST
} from "./views/views";

function App() {
  const [user, setUser] = useState(null);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const checkUser = getUser()
      .then((res) => {
        if (res.error) console.error(res.error);
        else setUser(res.username);
      })
      .catch((err) => console.error(err));
    return () => checkUser;
  }, []);

  useEffect(() => {
    //button is displayed after scrolling for 300pixels
    const handleScrollBtnVisibility = () => {
      window.scrollY > 300 ? setScrollUp(true) : setScrollUp(false);
    };

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <ToastContainer />
          {scrollUp && <ScrollUp />}

          <Routes>
            <Route path='*' exact={true}
              element={
                <>
                  <Error
                    errorTitle="OOPs!"
                    errorRedirectName="Home"
                    errorRedirectPath="/" 
                  />
                </>
              }
            />
            <Route exact path="/" 
              element={
              <>
                <Header 
                  headType="JoogleHeader" 
                />
                <JOOGLE />
              </>
              }
            />
            <Route exact path="/login"
              element={
              <>
                <Header 
                  headType="JoogleHeader" 
                />
                {!user ? <LOGIN /> : <JOOGLE />}
              </>
              }
            />
            <Route exact path="/signup" 
              element={
              <>
                <Header 
                  headType="JoogleHeader" 
                />
                {!user ? <SIGNUP /> : <JOOGLE />}
              </>
              }
            />
            <Route exact path="/profile" 
              element={
                <>
                  <div>asdasd</div>
                </>
              }
            />
            <Route exact path="/addPost" 
              element={
                <>
                  {!user ? <LOGIN /> : <ADDPOST />}
                </>
              }
            />
            <Route path="/explore" 
              element={
                <>
                  {
                    !user 
                    ?
                    (
                      <>
                      <Header headType="JoogleHeader" />
                      <LOGIN />
                      </>
                    )
                    :
                    (
                      
                      <>
                      <Header headType="ExploreHeader"/>
                      <EXPLORE />
                      </>
                    )
                  }
                  
                </>
              }
            />
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
