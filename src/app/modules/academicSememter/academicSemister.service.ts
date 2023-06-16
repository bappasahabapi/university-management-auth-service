import { IAcademicSemester } from "./academicSemester.interface";
import { AcademicSemister } from "./academicSemester.model";

const createAcademicSemester =async(payload:IAcademicSemester):Promise<IAcademicSemester>=>{
   const result = await AcademicSemister.create(payload);
   return result;
};

export const AcademicSemisterService ={
    createAcademicSemester
}