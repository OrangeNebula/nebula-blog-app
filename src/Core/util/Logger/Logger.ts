import Debug from 'debug';

const debugLogger = Debug('debug');
const errorLogger = Debug('error');

export default class Logger {
  static log = (e: any, data?: any) => {
    console.log(e, data);
  }

  static debug = (e: any, data?: any) => {
    debugLogger(e, data);
  }

  static error = (e: any, data?: any) => {
    errorLogger(e, data);
  }
}
