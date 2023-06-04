import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, label, printf,prettyPrint } = format;

import  DailyRotateFile from 'winston-daily-rotate-file';

// custom log format
const myFormat = printf(({ level, message, label, timestamp }) => {

    const date =new Date(timestamp);
    const hour =date.getHours();
    const minites =date.getMinutes();
    const seconds =date.getSeconds();
    return `${date.toString()} 🕔 ${hour}: ${minites}:${seconds} [${label}] ${level}: ${message}`;
    // return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        label({ label: '✅rmstu😉' }),
        timestamp(),
        myFormat,
        prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(process.cwd(), 'logs', 'winston', 'successes','rmstu-%DATE%-success.log'),
            datePattern: 'YYYY-DD-MM-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
          })
    ],
});

const errorlogger = createLogger({
    level: 'error',
    format: combine(
        label({ label: '❗ error' }),
        timestamp(),
        myFormat,
        prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(process.cwd(), 'logs', 'winston', 'errors','rmstu-%DATE%-error.log'),
            datePattern: 'YYYY-DD-MM-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
          })
    ],
});

export {
    logger,
    errorlogger
}
