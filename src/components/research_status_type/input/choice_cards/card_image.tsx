import clsx from "clsx";
import styles from "../../../../styles/research_status_type/input/choice_cards/card_image.module.css";

type CardImageProps = {
  className?: string
}

const CardImage: React.VFC<CardImageProps> = ({ className }) => {
  return (
    <img className={clsx(styles.root, className)} />
  );
}

export { CardImage };