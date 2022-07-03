import { useCallback, useState } from "react";

export function useCounter(initial: number = 0) {
  const [number, setNumber] = useState(initial);

  const addOne = useCallback(() => {
    setNumber((number) => number + 1);
  }, [number]);

  const subOne = useCallback(() => {
    if (number > 0) {
      setNumber((number) => number - 1);
    }
  }, [number]);

  const operations = {
    add: addOne,
    sub: subOne,
  };

  return { number, operations };
}
