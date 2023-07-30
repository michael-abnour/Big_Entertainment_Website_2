import Image from "next/image";
import styles from "./page.module.css";
import App from "./Contact";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Toaster />
      </div>

      <App />
    </main>
  );
}
