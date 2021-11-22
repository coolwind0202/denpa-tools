import clsx from "clsx";

import styles from "../../../../styles/research_status_type/input/select.module.css";

type SelectProps = {
  children?: React.ReactNode,
  className?: string
}

const Select: React.VFC<SelectProps> = ({ children, className }) => {
  return (
    <select className={clsx(styles.root, className)}>
      { children }
    </select>
  );
}

export { Select };