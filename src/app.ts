
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)



/* 
//Testing
app.get('/', async (req: Request, res: Response, next:NextFunction) => {
  // res.send('Working Successfully')
  // throw new ApiError(400,'errorbappa')
  // next('bappaErrorDile')
}) 
*/


//Global error handler
app.use(globalErrorHandler)

export default app
