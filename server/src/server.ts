import { connectToDb } from "./utils/db";
import app from "./utils/app";

const host = process.env.HOST;
const port = process.env.PORT;

const server = app.listen(port, async () => {
  await connectToDb();
  console.log(
    `server running on ${host}:${port} & process id is ${process.pid}`
  );
});

export default server;
