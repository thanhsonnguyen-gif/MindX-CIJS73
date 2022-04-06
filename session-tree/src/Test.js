import { useState, useEffect } from "react";

const Test = () => {
  /*const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('counting effect');
    document.title = "You have clicked ${count} times";
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );*/

  useEffect(() => {
    const handleScrolling = () => {
      (document.documentElement.scrollTop >500) && <button>backToTop</button>
    };
    document.addEventListener("scroll", handleScrolling);
  });

  return (
    <div style={{ height: 4000 }}>
    </div>
  );
};

export default Test;
