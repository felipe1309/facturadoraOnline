import { config } from "./config";
import { connect, connection, connections } from "mongoose";
if (connections.length !== 0 && typeof process.env.MONGO_URL == "string") {
  connect(config.MONGO_URL);
}
connection.on("connected", () => {
  console.log("is connected!!");
});
