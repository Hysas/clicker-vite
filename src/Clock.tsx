import { useState, useEffect } from "react";

type Props = {
  amount: number;
  speed: number;
};

export default function Clock({ amount, speed }: Props) {
  const [count, setCount] = useState(0);

  function refreshClock() {
    setCount((count) => count + amount);
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, speed);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return <p className="yellow">{count}</p>;
}
