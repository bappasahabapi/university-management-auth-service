import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendReponse from "../../../shared/sendResponse";
import { IAcademicFaculty } from "./academicFaculty.interface";
import httpStatus from "http-status";
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



export const AcademicFacultyController ={
    createFaculty
}