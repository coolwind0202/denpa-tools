import clsx from "clsx";

import styles from "../../../styles/research_status_type/tabs/tab.module.css";

type TabProps = {
  children?: React.ReactNode,
  className?: string
}

const Tab: React.VFC<TabProps> = ({ children, className }) => {
  return (
    <section className={clsx(styles.root, className)}>
      { children }
    </section>
  );
}

export { Tab }