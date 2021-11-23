import Head from "next/head";
import styles from "../styles/research_status_type.module.css";
import { Status } from "../components/research_status_type/status";
import { Exp } from "../components/research_status_type/exp";
import { Shape } from "../components/research_status_type/shape";

const ResearchStatusType = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title> 体格判断ガチで </title>
      </Head>
      
      <Status />

      <Exp />

      <Shape />

    </div>
  )
}

export default ResearchStatusType;