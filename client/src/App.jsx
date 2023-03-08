// importing modules
import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { UserContext } from "./UserContext";

// importing components
import { Error, Header,  Loading,  ScrollUp } from "./components/components";

//importing APIs functions
import { getUser } from "./api/api";

// importing views
import {
  JOOGLE,
  LOGIN,
  SIGNUP,
  EXPLORE,
  ADDPOST,
  MYPOST,
  DETAILS,
  EDITPOST,
  PROFILE
} from "./views/views";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    setUserLoading(true);
    const checkUser = getUser()
      .then((res) => {
        if (res.error){
          setUserLoading(false);
          console.error(res.error);
        }
        else{
          setUser(res.username);
          setLoggedInUserId(res._id);
          setUserLoading(false);
        }
      })
      .catch((err) => {
        setUserLoading(false);
        console.error(err)
        }
      );
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
        <UserContext.Provider value={{ user, setUser ,loggedInUserId, setLoggedInUserId}}>
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
                {userLoading ? <Loading loadType='blankLoad'/> : ''}
                {!userLoading && <JOOGLE />}
              </>
              }
            />
            <Route exact path="/login"
              element={
              <>
                {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <LOGIN />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <JOOGLE />} 
                  </>)
                }
              </>
              }
            />
            <Route exact path="/signup" 
              element={
              <>
                {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <SIGNUP />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <JOOGLE />}
                  </>)
                }
              </>
              }
            />
            <Route exact path="/profile" 
              element={
                <>
                  {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <LOGIN />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <PROFILE />} 
                  </>)
                  }
                </>
              }
            />
            <Route exact path="/explore/:postId" 
              element={
                <>
                  {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <LOGIN />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <DETAILS />} 
                  </>)
                  }
                </>
              }
            />
            <Route exact path="/addPost" 
              element={
                <>
                  {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <LOGIN />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <ADDPOST />} 
                  </>)
                  }
                </>
              }
            />
            <Route exact path="/editPost/:postId" 
              element={
                <>
                  {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <LOGIN />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <EDITPOST />} 
                  </>)
                  }
                </>
              }
            />
            <Route exact path="/myPost" 
              element={
                <>
                  {!user 
                  ? 
                  (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <LOGIN />}
                  </>)
                  :
                  (<>
                  {userLoading ? <Loading loadType='blankLoad'/> : ''}
                  {!userLoading && <MYPOST />} 
                  </>)
                  }
                </>
              }
            />
            <Route path="/explore" 
              element={
                <>
                  {
                    !user 
                    ? 
                    (<>
                      {userLoading ? <Loading loadType='blankLoad'/> : ''}
                      {!userLoading && <LOGIN />}
                    </>)
                    :
                    (<>
                    {userLoading ? <Loading loadType='blankLoad'/> : ''}
                    {!userLoading && <EXPLORE />}
                    </>)
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
