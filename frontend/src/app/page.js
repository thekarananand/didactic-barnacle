import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  
  const BuildNumber = "0.0.1-hardcoded";
  const BackendStatus = "Assume Running";
  const DatabaseStatus = "Assume Running";
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <div className={styles.container}>
          <span>Build Number: {BuildNumber}</span>
        </div>
        
        <div className={styles.container}>
          <h2>Backend Status: {BackendStatus}</h2>
        </div>
        
        <div className={styles.container}>
          <h2>Database Status: {DatabaseStatus}</h2>
        </div>
        
      </main>
      <footer className={styles.footer}>
        PS: this is a sample frontend application.
      </footer>
    </div>
  );
}
