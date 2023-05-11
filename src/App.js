import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const[second ,setSecond]=useState(0)
  const[minute ,setMinute]=useState(0)
var timer
  useEffect(()=>{
     timer = setInterval(() => {
      setSecond(second+1)
      if(second===59){
        setMinute(minute+1)
        setSecond(0)
      }
    }, 1000)
    return ()=>{
      clearInterval(timer)
    }
    
  })
      function handlePause(){
            clearInterval(timer)
        }
        
  return (
    <div className="App">
   <h1>  {minute}:{second}</h1>
   <button onClick={handlePause}>Pause</button>
   <button onClick={()=>{setMinute(0),setSecond(0)}}>Restart</button>
    </div>
  );
}
