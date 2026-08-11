import { useEffect, useRef } from "react";


function ThrottledScroll() {
  const lastRun = useRef(0);

  function throttle(fn, delay){
    let isThrottled = false;

    return(...args) => {
        if(!isThrottled){
            fn(...args);
    
            isThrottled = true;
    
            setTimeout(() => {
                
                isThrottled = false;
            }, delay)
        }
    }

}

  useEffect(() => {
    // const handleScroll = () => {
    //   const now = Date.now();
    //     console.log('now',now, lastRun?.current);
        
    //   if (now - lastRun.current < 500) return;

    //   lastRun.current = now;
    //   console.log("Scroll Y:", window.scrollY);
    // };

    const handleScroll = () =>{
        console.log("Scroll Y:", window.scrollY);
        
    }
    window.addEventListener("scroll", throttle(handleScroll, 2000));

    return () => {
        console.log('removed');
        
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      Scroll the page
    </div>
  );
}

export default ThrottledScroll;
