import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  }
);

const gellAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const paginationOptions = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder
    };
    //call the service
    const result = await AcademicSemesterService.gellAllSemesters(paginationOptions);


    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrived successfully',
      data: result,
    });
    next();
  }

)


export const AcademicSemesterController = {
  createSemester,
  gellAllSemesters
};
