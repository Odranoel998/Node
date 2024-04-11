import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";
import "dotenv/config";

(async () => {
  Server.start();
})();

// function main() {
//   Server.start();
// }
