import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester, IAcademicSemesterFilters } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { SortOrder } from 'mongoose';

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

// type IAcademicSemesterFilters={
//   searchTerm:string
// }

const gellAllSemesters = async (

  filters:IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
  ): Promise<IGenericResponse<IAcademicSemester[]>> => {

  // const { page = 1, limit = 10 } = paginationOptions;
  // const skip = (page - 1) * limit;
  const { page, limit, skip, sortBy, sortOrder } = paginationHelpers.calculatePagination(paginationOptions)

  const sortConditions:{[key:string]:SortOrder} = {};

  if(sortBy &&sortOrder){
    sortConditions[sortBy]=sortOrder;
  }

  //ekane query ta chalabo model er uperey
  const result = await AcademicSemester.find()
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
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
