import clsx from "clsx";
import styles from "../../../styles/research_status_type/tabs/output_area.module.css";

type OutputAreaProps = {
  children?: React.ReactNode
  className?: string
}

const OutputArea: React.VFC<OutputAreaProps> = ({ children, className }) => {
  return (
    <section className={clsx(styles.root, className)}>
      { children }
    </section>
  )
}

export { OutputArea };