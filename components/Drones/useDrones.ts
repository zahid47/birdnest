import axios from "../../utils/axios";
import serializeResponse from "../../utils/serializeResponse";

export default function useDrones() {
  const getDrones = new Promise((resolve, reject) => {
    axios
      .get("/drones")
      .then((res) => {
        // serialize response data to json (if xml)
        resolve(serializeResponse(res));
      })
      .catch((err) => {
        reject(err);
      });
  });
  
  return {
    getDrones,
  };
}
