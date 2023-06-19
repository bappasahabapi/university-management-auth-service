import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { academicSemesterSearchableFields, academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester, IAcademicSemesterFilters } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

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

const gellAllSemesters = async (

  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {


  const { searchTerm , ...filtersData} = filters;

  // const academicSemesterSearchableFields =['title','code','year']
  const andConditions=[];

  // hadle the serchTerm part
  if(searchTerm){
    andConditions.push({
      $or: academicSemesterSearchableFields.map((field)=>({
          [field]:{
            $regex:searchTerm,
            $options:'i'
          }
      }))
    })
  }

  // handle filters data part
  if(Object.keys(filtersData).length){
    andConditions.push({
      $and:Object.entries(filtersData).map(([field,value])=>({
        [field]:value
      }))
    })
  }

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         title: {
  //           $regex: searchTerm,
  //           $options: 'i'
  //         }
  //       },
  //       {
  //         code: {
  //           $regex: searchTerm,
  //           $options: 'i'
  //         }
  //       },
  //       {
  //         year: {
  //           $regex: searchTerm,
  //           $options: 'i'
  //         }
  //       },
  //     ]
  //   }
  // ];

  const { page, limit, skip, sortBy, sortOrder } = paginationHelpers.calculatePagination(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }


  const whereConditions =andConditions.length >0 ? {$and:andConditions} : {}

  //ekane query ta chalabo model er uperey
  // const result = await AcademicSemester.find({$and:andConditions})
  const result = await AcademicSemester.find(whereConditions)
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
