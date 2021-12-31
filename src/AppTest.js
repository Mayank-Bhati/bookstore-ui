import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [times, setTimes] = useState(0);
    const [timerUp, settimerUp] = useState(false);

  let timer ;

  useEffect(()=> {
  if(timerUp){
  timer = setTimeout(() => {
                          setTimes((times) => times + 1);
                        }, 1000);
  }
  }
 );
  function clickHandle(){
  if(!timerUp){
    setTimes(0);
    settimerUp(true);
  }else{
  settimerUp(false);
  clearTimeout(timer);
  }
  }
      const printHeadings = () => {
       return ( <h1 className="heading">{times}</h1>);
    };
  return (
    <div className="App">
    {
     printHeadings()
    }

      <button type="button" value ="Start/Stop" onClick={clickHandle}>Start/Stop</button>
    </div>
  );
}

export default App;
