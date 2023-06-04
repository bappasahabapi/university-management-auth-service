import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import logger from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
   logger.info('🔋 Database is connected')

    app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    logger.error('Failed to connet to database', error)
  }
}

bootstrap()
