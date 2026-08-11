import { useEffect, useState } from "react";
import Transition from "./components/transition";
import SuspenseComp from "./components/suspense/suspense";
import { LoginForm } from "./components/Form/form";

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


      return () => console.log('unmount')

  },[])

  return (
    <>
      <button onClick={handleClick}>
        Click
      </button>
      <Transition/>
      <SuspenseComp/>
      <LoginForm />
    </>
  );
}

export default App;
