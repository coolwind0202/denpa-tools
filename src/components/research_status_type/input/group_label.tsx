import clsx from "clsx";
import styles from "../../../styles/research_status_type/input/group_label.module.css";

type GroupLabelProps = {
  children?: React.ReactNode,
  className?: string
}

const GroupLabel: React.VFC<GroupLabelProps> = ({ children, className }) => {
  return (
    <legend className={clsx(styles.root, className)}>
      { children }
    </legend>
  )
}

export { GroupLabel };