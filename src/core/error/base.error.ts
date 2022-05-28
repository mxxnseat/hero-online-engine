export abstract class BaseError {
  public get status() {
    return this._status;
  }
  public get message() {
    return this._message;
  }

  constructor(
    protected readonly _status: number,
    protected readonly _message: string,
  ) {}
}
