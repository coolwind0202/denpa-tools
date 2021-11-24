import clsx from "clsx";
import { MouseEventHandler } from "react";
import styles from "../../../../styles/research_status_type/input/choice_cards/card.module.css";

type CardProps = {
  children?: React.ReactNode,
  className?: string,
  onClick?: MouseEventHandler
}

const Card: React.VFC<CardProps> = ({ className, children, onClick }) => {
  return (
    <div role="radio" className={clsx(styles.root, className)} onClick={onClick}>
      { children }
    </div>
  );
}

export { Card }