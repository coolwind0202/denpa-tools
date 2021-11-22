import clsx from "clsx";
import styles from "../../../../../styles/research_status_type/input/pattern/pattern_image.module.css";

type PatternImageProps = {
  className?: string
}

const PatternImage: React.VFC<PatternImageProps> = ({ className }) => {
  return (
    <img className={clsx(styles.root, className)} />
  );
}

export { PatternImage };