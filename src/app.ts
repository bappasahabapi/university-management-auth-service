import cors from 'cors'
import express, { Application } from 'express'
// import  {  NextFunction, Request, Response } from 'express'
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'




const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', UserRoutes)




//  Testing
// app.get('/', async(req: Request, res: Response, next:NextFunction) => {
//   // Promise.reject((new Error('Unhandled promise Rejection')))
//   // console.log(x)
//  throw new Error ('testing error loger')
// }) 



//Global error handler
app.use(globalErrorHandler)

export default app


