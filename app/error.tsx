"use client";

import { useEffect } from "react";
import styles from "./page.module.css";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div className={styles.main}>Something went wrong!</div>;
}
