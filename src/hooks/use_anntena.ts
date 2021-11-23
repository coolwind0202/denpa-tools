import { useState } from "react"

type Anntena = {
  label: string
}

const categories = new Map();

const useAnntena = () => {
  const [ category, setCategory ] = useState<string>();

  return {
    get anntena() {

    }

    setAnntena() {

    }
  }
}

export { useAnntena }