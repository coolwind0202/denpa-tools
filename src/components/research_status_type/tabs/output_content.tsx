import clsx from "clsx";
import styles from "../../../styles/research_status_type/tabs/output_content.module.css";

type OutputContentProps = {
  children?: React.ReactNode
  className?: string
}

const OutputContent: React.VFC<OutputContentProps> = ({ children, className }) => {
  return (
    <div className={clsx(styles.root, className)}>
      { children }
    </div>
  )
}

export { OutputContent };