class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, stateCode: 400) {
    this.message = message;
    this.statusCode = stateCode;
  }
}

export default AppError;
