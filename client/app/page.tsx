import Drones from "../components/Drones/Drones";
import axios from "../utils/axios";
import styles from "./page.module.css";

const getDronesServer = async () => {
  try {
    const res = await axios.get("/drones");
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default async function Home() {
  const drones = await getDronesServer();

  return (
    <main className={styles.main}>
      <h1 className="text-6xl font-bold mb-4 text-center">PROJECT B1RDN3ST</h1>
      <div>
        <Drones initialDrones={drones} />
      </div>
    </main>
  );
}
