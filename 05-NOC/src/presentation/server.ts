import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-sevice";

export class Server {
  static start() {
    console.log("Server started ...");
    CronService.createJob("*/10 * * * * *", () => {
      new CheckService(
        () => console.log("sucess"),
        (error) => console.log(error)
      ).excute("http://google.com");
      // new CheckService().excute("http://localhost:3000");
    });
  }
}
Server.start();
