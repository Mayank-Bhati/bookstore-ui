import './Home.css';
import {useState, useEffect} from 'react';
import Login from './Login';
import Books from './Books';


function Home() {
   const [loggedIn, setLoggedIn] = useState(true);

   function logout(){
     setLoggedIn(false);
   }
   function login(){
        setLoggedIn(true);
      }

  return (
  <div id="home">
    <div className="header"></div>
    <div className="main">{loggedIn? <Books/> : <Login login/>}</div>
    <div className="footer">Footer</div>
  </div>
  );
}

export default Home;
