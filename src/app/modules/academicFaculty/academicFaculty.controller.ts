import { Request, Response } from "express";
import httpStatus from "http-status";
import { paginationFields } from "../../../constants/pagination";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendReponse from "../../../shared/sendResponse";
import { academicFacultyFilterableFields } from "./academicFaculty.constants";
import { IAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyService } from "./academicFaculty.service";


const createFaculty=catchAsync(
    async(req:Request,res:Response)=>{
        const {...academicFacultyData}=req.body;
        const result=await AcademicFacultyService.createFaculty(academicFacultyData);

        sendReponse<IAcademicFaculty>(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:'Academic Faculty created succcessfully ',
            data:result
        });

    });

const getAllFaculties=catchAsync(
    async (req:Request,res:Response) => {
        
        const filters =pick(req.query, academicFacultyFilterableFields);
        const paginationOptions =pick(req.query,paginationFields);

        const result =await AcademicFacultyService.gellAllFaculties(filters,paginationOptions);

        sendReponse<IAcademicFaculty[]>(res,{
            statusCode:httpStatus.OK,
            success:true,
            message:'Academic Semester retrived successfully',
            meta:result.meta,
            data:result.data
        });
    }
)



export const AcademicFacultyController ={
    createFaculty,
    getAllFaculties
}