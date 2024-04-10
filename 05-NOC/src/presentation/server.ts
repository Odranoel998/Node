import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infraestructure/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-sevice";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

export class Server {
  static start() {
    console.log("Server started ...");
    CronService.createJob("*/10 * * * * *", () => {
      new CheckService(
        fileSystemLogRepository,
        () => console.log("sucess"),
        (error) => console.log(error)
      ).excute("https://www.google.com");
      // new CheckService().excute("http://localhost:3000");
    });
  }
}
Server.start();
