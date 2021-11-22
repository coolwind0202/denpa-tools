import clsx from "clsx";
import styles from "../../../../../styles/research_status_type/input/pattern/body_pattern.module.css";

type BodyPatternProps = {
  children?: React.ReactNode,
  className?: string
}

const BodyPattern: React.VFC<BodyPatternProps> = ({ className, children }) => {
  return (
    <div role="radio" className={clsx(className, styles.root)}>
      { children }
    </div>
  );
}

export { BodyPattern }