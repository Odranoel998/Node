import nodemailer from "nodemailer";
import { envs } from "../../config/plugins/envs.plugin";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements?: Attachement[];
}

interface Attachement {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailOptions): Promise<Boolean> {
    const { to, subject, htmlBody, attachements = [] } = options;
    try {
      const sentInfomation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements,
      });
      console.log(sentInfomation);
      return true;
    } catch (error) {
      return false;
    }
  }

  async sendEmailFileSystemLogs(to: string | string[]) {
    const subject = "Logs del servidor";
    const htmlBody = `
      <h3>Logs de sistema - NOC</h3>
      <p>Leo Prueba 2</p>
      <p>Ver logs adjuntos</p>
       `;

    const attachements: Attachement[] = [
      { filename: "logs-all.log", path: "logs-all.log" },
      { filename: "logs-high.log", path: "logs-high.log" },
      { filename: "logs-medium.log", path: "logs-medium.log" },
    ];

    console.log("Send email or emails");
    return this.sendEmail({
      to,
      subject,
      attachements,
      htmlBody,
    });
  }
}
