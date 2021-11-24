import clsx from "clsx";
import styles from "../../../../styles/research_status_type/input/choice_cards/card_container.module.css";

type CardContainerProps = {
  children?: React.ReactNode,
  className?: string
}

const CardContainer: React.VFC<CardContainerProps> = ({ className, children }) => {
  return (
    <div role="radiogroup" className={clsx(styles.root, className)}>
      { children }
    </div>
  );
}

export { CardContainer }