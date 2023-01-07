import type { NextApiRequest, NextApiResponse } from "next";
import { birdnestInstance as axios } from "../../utils/axios";
import serializeResponse from "../../utils/serializeResponse";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  axios
    .get("/drones")
    .then((response) => {
      return res.status(200).json(serializeResponse(response).data);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}
