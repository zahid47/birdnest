import { serverInstance as axios } from "../../utils/axios";

export default function useDrones() {
  const getDrones = new Promise((resolve, reject) => {
    axios
      .get("/drones")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  return {
    getDrones,
  };
}
