import { NextFunction, Request, Response } from "express";
import config from "../../../../config";
import { IGenericErrorMessage } from "../../../../interfaces/error";

const globalErrorHandler = (err, req: Request, res: Response, next: NextFunction) => {
    
    // res.status(400).json({bapiErr:err})
    
   

    const  statusCode =5000;
    const message ='Something went wrong';
    const errorMessages:IGenericErrorMessage[] =[]




    res.status(statusCode).json({
        success:false,
        message,
        errorMessages,
        stack: config.env !== 'production' ? err.stack : undefined
    })

    next();
}

export default globalErrorHandler