export class MathUtil {
  static getRandomNumber(min: number, max: number): number {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
  }

  static parseNumber(value: string | undefined): number {
    if (!value) {
      return 0;
    }
    return parseInt(value, 10);
  }
}
