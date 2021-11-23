import clsx from "clsx";
import styles from "../../../styles/research_status_type/tabs/output_note.module.css";

type OutputNoteProps = {
  children?: React.ReactNode
  className?: string
}

const OutputNote: React.VFC<OutputNoteProps> = ({ children, className }) => {
  return (
    <p className={clsx(styles.root, className)}>
      { children }
    </p>
  )
}

export { OutputNote };