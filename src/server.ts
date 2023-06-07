import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import {logger,errorlogger} from './shared/logger'
import { Server } from 'http';


process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});


let server:Server;

async function bootstrap() {

  try {
    await mongoose.connect(config.database_url as string)
   logger.info('🔋 Database is connected')

    server=app.listen(config.port, () => {
      logger.info(`🚀 Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('Failed to connet to database', error)
  }

  process.on('unhandledRejection',error=>{
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  })

}

bootstrap()



process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});


