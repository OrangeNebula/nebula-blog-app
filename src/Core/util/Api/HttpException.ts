export default class HTTPException<T> extends Error {
  public readonly isServerError: boolean;

  constructor(
    public readonly message: string,
    public readonly status: number = 500,
    public readonly response?: T
  ) {
    super(message);
    this.isServerError = status === 500;
  }
}