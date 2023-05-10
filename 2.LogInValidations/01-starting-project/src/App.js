import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('loggedIn', '1');
    setIsLoggedIn(true);
  };


  useEffect(()=>{
    const token = localStorage.getItem('loggedIn');
    if(token === '1'){
      setIsLoggedIn(true);
    }
    console.log(token);
  },[])

  const logoutHandler = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
