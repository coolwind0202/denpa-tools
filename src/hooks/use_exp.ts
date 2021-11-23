import { useEffect, useState } from "react"

import { Dispatch, SetStateAction } from "react";


type Setter = Dispatch<SetStateAction<number>>

const useExp = (): [number, Setter, Setter] => {
  const [ total, setTotal ] = useState<number>(0);
  const [ next, setNext ] = useState<number>(0);

  const [ nextLvExp, setNextLvExp ] = useState<number>(0);

  useEffect(() => {
    setNextLvExp(total + next);
  }, [ total, next ]);

  return [
    nextLvExp,
    setTotal,
    setNext,
  ]
}

export { useExp };