
import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', usersRouter)


class ApiError extends Error{
  statusCode:number;

  constructor(statusCode:number,message:string |undefined, stack =''){
    super(message)
    this.statusCode=statusCode;
    if(stack){
      this.stack=stack
    }else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}

//Testing
app.get('/', async (req: Request, res: Response, next:NextFunction) => {
  // res.send('Working Successfully')
  throw new ApiError(400,'errorbappa')
  // next('bappaErrorDile')
})


//overWrite errro handling - (Global error handler)
app.use((err,req:Request,res:Response,next:NextFunction)=>{
  console.log(err);
  if(err instanceof Error){
    res.status(400).json({error:err})
  }else{
    res.status(500).json({error:'Generic error'})
  }
})

export default app
