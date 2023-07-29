import Image from "next/image";
import styles from "./page.module.css";
import App from "./Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}
