export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}
export interface Options {
  level: LogSeverityLevel;
  message: string;
  createDate?: Date;
  origin: string;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createDate: Date;
  public origin: string;

  constructor(options: Options) {
    const { level, message, origin, createDate = new Date() } = options;
    this.level = level;
    this.message = message;
    this.origin = origin;
    this.createDate = createDate;
  }
  static fromJson = (json: string): LogEntity => {
    const { level, message, createDate, origin } = JSON.parse(json);
    const date = new Date(createDate);
    const log = new LogEntity({
      level: level,
      message: message,
      createDate: date,
      origin: origin,
    });
    //const log.createDate= new Date(createDate)

    return log;
  };
}
