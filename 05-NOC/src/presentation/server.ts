import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infraestructure/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-sevice";
import { EmailService } from "./email/email-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

export class Server {
  static start() {
    console.log("Server started ...");
    const emailService = new EmailService();
    emailService.sendEmailFileSystemLogs([
      "odranoel.leonardo98@gmail.com",
      "panquequitosabroso@gmail.com",
    ]);
    // emailService.sendEmail({
    //   to: "odranoel.leonardo98@gmail.com",
    //   subject: "Logs de sistema",
    //   htmlBody: `
    //   <h3>Logs de sistema - NOC</h3>
    //   <p>Leo Prueba 2</p>
    //   <p>Ver logs adjuntos</p>
    //   `,
    // });

    // CronService.createJob("*/10 * * * * *", () => {
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log("sucess"),
    //     (error) => console.log(error)
    //   ).excute("https://www.google.com");
    // });
  }
}
