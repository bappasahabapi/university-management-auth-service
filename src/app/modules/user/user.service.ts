import { IStudent } from './../student/student.interfaces';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudent = async (student:IStudent ,user: IUser): Promise<IUser | null> => {

  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  // set role
  user.role='student';

  const academicsemester =await AcademicSemester.findById(student.academicSemester);

  //generate student id
  const id =await generateStudentId(academicsemester)



  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create');
  }
  return createdUser;
};

export const UserService = {
  createStudent,
}