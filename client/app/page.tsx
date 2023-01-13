import Drones from "../components/Drones/Drones";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-6xl font-bold mb-4 text-center">PROJECT B1RDN3ST</h1>
      <div>
        <Drones />
      </div>
    </main>
  );
}
