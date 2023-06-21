import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';
import { academicSemesterFilterableFields } from './academicSemester.constant';

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

    // const filters =pick(req.query,['searchTerm','title','code','year'])
    const filters =pick(req.query,academicSemesterFilterableFields)
    const paginationOptions =pick(req.query, paginationFields);


 
    const result = await AcademicSemesterService.gellAllSemesters(filters,paginationOptions);

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semesters retrieved successfully !',
      meta: result.meta,
      data: result.data, 
    });
    next();
  }

);

const getSingleSemester =catchAsync(
  async(req:Request,res:Response,next:NextFunction)=>{
    const id =req.params.id;

    const result =await AcademicSemesterService.getSingleSemester(id);


    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved successfully !',
      data:result

    });
    next(); 
  }
);

const updateSemester=catchAsync(
  async(req:Request,res:Response,next:NextFunction)=>{
    const id =req.params.id;
    const updatedData= req.body;

    const result =await AcademicSemesterService.updateSemester(id,updatedData);


    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester updated  successfully !',
      data:result

    });
    next(); 
  }
);


export const AcademicSemesterController = {
  createSemester,
  gellAllSemesters,
  getSingleSemester,
  updateSemester
};
