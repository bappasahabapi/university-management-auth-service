import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err, req: Request, res: Response, next: NextFunction) => {
    
    res.status(400).json({
        bapiErr:err
    })
    next();
}

export default globalErrorHandler