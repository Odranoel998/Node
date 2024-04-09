export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createDate: Date;

  constructor(level: LogSeverityLevel, message: string, createDate?: Date) {
    this.level = level;
    this.message = message;
    this.createDate = new Date();
  }
  static fromJson = (json: string): LogEntity => {
    const { level, message, createDate } = JSON.parse(json);
    const date = new Date(createDate);
    const log = new LogEntity(level, message, date);
    //const log.createDate= new Date(createDate)

    return log;
  };
}
