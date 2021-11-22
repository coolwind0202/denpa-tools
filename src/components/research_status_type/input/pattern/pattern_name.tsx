import clsx from "clsx";
import styles from "../../../../../styles/research_status_type/input/pattern/pattern_name.module.css";

type PatternNameProps = {
  children?: React.ReactNode,
  className?: string
}

const PatternName: React.VFC<PatternNameProps> = ({ className, children }) => {
  return (
    <span className={clsx(styles.root, className)}> { children }  </span>
  );
}

export { PatternName };