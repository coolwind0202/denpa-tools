import clsx from "clsx";
import styles from "../../../../../styles/research_status_type/input/pattern/pattern_container.module.css";

type PatternContainerProps = {
  children?: React.ReactNode,
  className?: string
}

const PatternContainer: React.VFC<PatternContainerProps> = ({ className, children }) => {
  return (
    <div role="radiogroup" className={clsx(className, styles.root)}>
      { children }
    </div>
  );
}

export { PatternContainer }