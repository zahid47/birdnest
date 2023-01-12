import axios from "./axios";

const fetchPilotData = async (serialNumber: string) => {
  try {
    const response = await axios.get(`/pilots/${serialNumber}`);
    return response.data;
  } catch (error: any) {
    console.error(error);
    if (error.response.status === 404) {
      return null;
    }
  }
};

export default fetchPilotData;
