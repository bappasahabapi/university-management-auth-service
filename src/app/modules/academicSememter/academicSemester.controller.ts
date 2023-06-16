import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemisterService } from './academicSemister.service';
import { IAcademicSemester } from './academicSemester.interface';


const createAcademicSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemeterData } = req.body;
    const result = await AcademicSemisterService.createAcademicSemester(academicSemeterData);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is  created successfully :)',
      data: result,
    });
    next();
  }
);

export const AcademicSemesterController = {
    createAcademicSemester,
};
