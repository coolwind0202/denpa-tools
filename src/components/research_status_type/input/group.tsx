import styles from "../../../../styles/research_status_type/input/group.module.css";

type GroupProps = {
  children?: React.ReactNode
}

const Group: React.VFC<GroupProps> = ({ children }) => {
  return (
    <fieldset className={styles.root}>
      { children }
    </fieldset>
  )
}

export { Group };