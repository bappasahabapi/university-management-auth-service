import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { academicSememterTitleCodeMaper } from "./academicSemester.constant";
import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemister } from "./academicSemester.model";

const createAcademicSemester =async(payload:IAcademicSemester):Promise<IAcademicSemester>=>{

   if(academicSememterTitleCodeMaper[payload.title] !==payload.code){
    throw new ApiError(httpStatus.BAD_REQUEST,'Invalid Semester Code')
    // throw new ApiError(400,'Invalid Semester Code')
   }

   const result = await AcademicSemister.create(payload);
   return result;
};

export const AcademicSemisterService ={
    createAcademicSemester
}