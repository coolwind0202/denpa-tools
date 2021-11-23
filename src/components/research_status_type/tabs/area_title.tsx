import clsx from "clsx";
import styles from "../../../styles/research_status_type/tabs/area_title.module.css";

type AreaTitleProps = {
  children?: React.ReactNode,
  className?: string
}

const AreaTitle: React.VFC<AreaTitleProps> = ({ children, className }) => {
  return (
    <p className={clsx(styles.root, className)}>
      { children }
    </p>
  )
}

export { AreaTitle };