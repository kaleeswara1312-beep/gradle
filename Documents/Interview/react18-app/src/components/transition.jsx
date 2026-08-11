import { useState, useTransition } from "react";

function Transition() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [items, setItems] = useState([]);

  const handleClick = () => {
    // urgent update
    setCount(c => c + 1);

    // non-urgent update, might be slow
    startTransition(() => {
      const newItems = Array.from({ length: 20000 }, (_, i) => `Item ${i}`);
      setItems(newItems);
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click Me</button>
      {isPending && <p>Loading items...</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Transition;
