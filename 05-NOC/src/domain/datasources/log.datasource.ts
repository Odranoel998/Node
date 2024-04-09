import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogDataSources {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
