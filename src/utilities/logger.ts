export {};
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

interface defaultParams {
  contents: unknown;
}

const logger = {
  _metaData: null,

  init: function (params: any) {
    winston.remove(winston.transports.Console);
    if (params.filename) {
      winston.add(DailyRotateFile, {
        name: params.name,
        level: params.level ? params.level : "debug",
        timestamp: true,
        filename: params.filename,
        dirname: params.dirname,
        datePattern: params.datePattern,
        logstash: false,
        showLevel: true,
        tailable: true,
        json: false,
        exitOnError: false,
      });
    } else {
      winston.add(winston.transports.Console, {
        level: params.level ? params.level : "debug",
        timestamp: true,
        showLevel: true,
        exitOnError: false,
        json: false,
        prettyPrint: true,
      });
    }
  },

  formatMessage: function (msg: string, res: any) {
    const defaultParams: any = {};
    if (res && res.locals && res.locals.uuid)
      defaultParams.uuid = res.locals.uuid;
    return JSON.stringify(Object.assign(defaultParams, msg, this._metaData));
  },

  debug: function (msg: string, res: any) {
    winston.debug(this.formatMessage(msg, res));
  },

  verbose: function (msg: string, res: any) {
    winston.verbose(this.formatMessage(msg, res));
  },

  info: function (msg: string, res: any) {
    winston.info(this.formatMessage(msg, res));
  },

  warn: function (msg: string, res: any) {
    winston.warn(this.formatMessage(msg, res));
  },

  error: function (msg: string, res: any) {
    winston.error(this.formatMessage(msg, res));
  },
};

module.exports = logger;
