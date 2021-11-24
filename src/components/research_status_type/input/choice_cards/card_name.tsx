import clsx from "clsx";
import styles from "../../../../styles/research_status_type/input/choice_cards/card_name.module.css";

type CardNameProps = {
  children?: React.ReactNode,
  className?: string
}

const CardName: React.VFC<CardNameProps> = ({ className, children }) => {
  return (
    <span className={clsx(styles.root, className)}> { children }  </span>
  );
}

export { CardName };