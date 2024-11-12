import { useState } from "react";

const usePaginationHook = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [next, setNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  return {
    offset,
    setOffset,
    limit,
    setLimit,
    next,
    setNext,
    previous,
    setPrevious,
  };
};

export default usePaginationHook;
