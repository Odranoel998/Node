export class CreateTodoDto {
  private constructor(public readonly text: String) {}

  static create(props: { [key: string]: any }): any {
    const { text } = props;

    if (!text) {
      return ["Text property is required", undefined];
    }
    return [undefined, new CreateTodoDto(text)];
  }
}
