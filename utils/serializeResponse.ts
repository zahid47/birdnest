import { AxiosResponse } from "axios";
import { xml2js } from "xml-js";

export default function serializeResponse(res: AxiosResponse<any, any>) {
  if (res.headers["content-type"] === "application/xml") {
    return xml2js(res.data);
  }
  return res.data;
}
