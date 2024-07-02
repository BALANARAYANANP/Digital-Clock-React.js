
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [currentdate, setCurrentdate] = useState(new Date());
  useEffect(()=>{
      const timer = setInterval(()=>{
        setCurrentdate(new Date())
      },1000);
      return() =>
        clearInterval(timer);
      
  },[])

  const zeroformat = (hours)=>{
              return hours < 10 ? `0${hours}`  : hours;
  }
  const hourformat = (hours)=> {
    return hours <=12 ? hours : hours- 12; 
  }
  const Formatdate = (date)=>{
    const options = {weekday : "long", year : "numeric" , month:"long", day: "numeric"}
    return  date.toLocaleDateString(undefined,options);
  }
  
  return (
    <div>
      
     <div className='Digital-clock'>
      <h1>Digital Clocks</h1>
      
        <div className="Time">{hourformat(zeroformat(currentdate.getHours()))}:
          {
            zeroformat(currentdate.getMinutes())
          }:
          {
            zeroformat(currentdate.getSeconds())
          }
          {
          currentdate.getHours() >= 12 ? " PM" : " AM"
}
        </div>
        <div className="date">{Formatdate(currentdate)}</div>
   
         </div>

  

    </div>
  );
}

export default App;
