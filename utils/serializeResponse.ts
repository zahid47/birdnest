import { AxiosResponse } from "axios";
import { xml2js } from "xml-js";

export default function serializeResponse(res: AxiosResponse<any, any>) {
  if (res.headers["content-type"] === "application/xml") {
    res.data = xml2js(res.data, {
      compact: true,
      ignoreDeclaration: true,
      ignoreInstruction: true,
      ignoreComment: true,
      ignoreCdata: true,
      ignoreDoctype: true,
    });
    return res;
  }
  return res;
}
