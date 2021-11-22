import clsx from "clsx";

import styles from "../../../../styles/research_status_type/input/number.module.css";

type NumberInputProps = {
  id?: string,
  min?: number,
  max?: number,
  placeholder?: string,
  className?: string
  required?: boolean
}

const NumberInput: React.VFC<NumberInputProps> = ({ id, min, max, placeholder, className, required }) => {
  return (
    <input className={clsx(styles.root, className)} 
          id={id}
          type="number" 
          min={min} max={max} 
          placeholder={placeholder} 
          required={required}/>
  );
}

export { NumberInput };