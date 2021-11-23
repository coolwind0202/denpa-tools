import clsx from "clsx";
import styles from "../../../styles/research_status_type/tabs/input_area.module.css";

type InputAreaProps = {
  children?: React.ReactNode,
  className?: string
}

const InputArea: React.VFC<InputAreaProps> = ({ children, className }) => {
  return (
    <form className={clsx(styles.root, className)}>
      { children }
    </form>
  )
}

export { InputArea }