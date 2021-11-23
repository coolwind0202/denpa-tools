import { useState } from "react";
import { bodyPatterns, PatternName, patternNames } from "../util/body_patterns";

const usePattern = () => {
  const [ patternName, setPatternName ] = useState<PatternName>("なし");

  const setPattern = (label: string) => {
    const isPatternName = (name: string): name is PatternName => patternNames.includes(name as PatternName)

    if (isPatternName(label))
      setPatternName(label);
  }

  return {
    get pattern() {
      return bodyPatterns.get(patternName)
    },
    setPattern
  }
}

export { usePattern };