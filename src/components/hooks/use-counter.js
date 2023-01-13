import { useState,useEffect } from "react";
const useCounter=(farword=true)=>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(farword){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
        
      }, 1000);
  
      return () => clearInterval(interval);
    }, [farword]);
    return counter;
}
export default useCounter;