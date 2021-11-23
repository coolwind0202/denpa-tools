import clsx from "clsx";
import { MouseEventHandler } from "react";
import styles from "../../../../styles/research_status_type/input/pattern/body_pattern.module.css";

type BodyPatternProps = {
  children?: React.ReactNode,
  className?: string,
  onClick?: MouseEventHandler
}

const BodyPattern: React.VFC<BodyPatternProps> = ({ className, children, onClick }) => {
  return (
    <div role="radio" className={clsx(styles.root, className)} onClick={onClick}>
      { children }
    </div>
  );
}

export { BodyPattern }