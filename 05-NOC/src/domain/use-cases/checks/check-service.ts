import { log } from "console";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
  excute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async excute(url: string): Promise<boolean> {
    try {
      const req = fetch(url);
      if (!req) {
        throw new Error(`Error on check service${url}`);
      }
      const log = new LogEntity(LogSeverityLevel.low, `Service ${url} working`);
      this.logRepository.saveLog(log);
      this.successCallback();
      console.log(`${url} is ok`);
      return true;
    } catch (error) {
      const errorMessage = `${error}`;
      const log = new LogEntity(LogSeverityLevel.low, errorMessage);
      this.logRepository.saveLog(log);
      this.errorCallback(errorMessage);
      return false;
    }
  }
}
