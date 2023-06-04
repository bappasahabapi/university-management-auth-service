import { createLogger, format, transports } from 'winston';
import path from 'path';

const { combine, timestamp, label, printf,prettyPrint } = format;

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
        label({ label: '✅😉' }),
        timestamp(),
        myFormat,
        prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console(),
        new transports.File({
            filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
            level: 'info',
        }),
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
        new transports.File({
            filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
            level: 'error',
        }),
    ],
});

export {
    logger,
    errorlogger
}
