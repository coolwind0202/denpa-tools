import clsx from "clsx";
import Image from "next/image";
import { ImageProps } from "next/image";
import styles from "../../../../styles/research_status_type/input/choice_cards/card_image.module.css";

type CardImageProps = {
  children?: React.ReactNode,
  className?: string
};

const CardImage: React.VFC<CardImageProps> = ({ children, className }) => {
  // 
  return (
    <div className={clsx(styles.root, className)}>
      { children }
    </div>
  );
}

export { CardImage };