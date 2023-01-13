import Drones from "../components/Drones/Drones";
import styles from "./page.module.css";
import { Cinzel } from "@next/font/google";
import axios from "../utils/axios";

const cinzel = Cinzel();

const getDrones = async () => {
  try {
    const res = await axios.get("/drones");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const drones = await getDrones();

  return (
    <main className={styles.main}>
      <h1 className={`text-6xl font-bold mb-4 text-center${cinzel.className}`}>
        PROJECT B1RDN3ST
      </h1>
      <div>
        <Drones initialDrones={drones} />
      </div>
    </main>
  );
}
