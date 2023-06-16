import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { IGenericResponse } from '../../../interfaces/common';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  // Summer  02 !=== 03
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};


// type IGenericResponse<T> = {
//   meta: {
//     page?: number;
//     limit?: number;
//     total: number
//   };
//   data: T;
// }

const gellAllSemesters = async (paginationOptions: IPaginationOptions): Promise<IGenericResponse<IAcademicSemester[]>> => {

  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (page - 1) * limit;

  //ekane query ta chalabo model er uperey
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result
  }
}


export const AcademicSemesterService = {
  createSemester,
  gellAllSemesters
};
