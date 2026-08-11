import { useEffect, useState } from "react";
import Transition from "./components/transition";
import SuspenseComp from "./components/suspense/suspense";
import HOC from "./components/HOC";
import Search from "./components/debouncethrottle/Debounce";
import ThrottledScroll from "./components/debouncethrottle/Throttle";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  console.log("render");

  const handleClick = () => {
    setTimeout(() => {
      setCount(c => c + 1);
      setLoading(l => !l);
    }, 1000);
  };

  useEffect(()=>{
  console.log("useefffect");

    // setTimeout(() => {
    //   setCount(c => c + 1);
    //   setLoading(l => !l);
    // }, 1000);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => {
        setCount(c => c + 1);  // update 2
        setLoading(false); // update 3
      });

  },[])
    
  return (
    <>
      <button onClick={handleClick}>
        Click
      </button>
      <Transition/>
      <SuspenseComp/>
      <HOC data={'Hi'}/>
      <Search/>
      <ThrottledScroll/>
    </>
  );
}

export default App;
