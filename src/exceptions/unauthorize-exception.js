export default class UnathorizeException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.code = 401;
  }
}
