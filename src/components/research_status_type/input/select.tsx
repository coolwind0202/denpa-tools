import clsx from "clsx";
import { ChangeEventHandler } from "react";

import styles from "../../../styles/research_status_type/input/select.module.css";

type SelectProps = {
  children?: React.ReactNode,
  className?: string,
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.VFC<SelectProps> = ({ children, className, onChange }) => {
  return (
    <select className={clsx(styles.root, className)} onChange={onChange}>
      { children }
    </select>
  );
}

export { Select };