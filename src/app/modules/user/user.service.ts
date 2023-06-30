import mongoose from 'mongoose';
import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { IStudent } from '../student/student.interfaces';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import { Student } from '../student/student.model';
import httpStatus from 'http-status';

const createStudent = async (student: IStudent, user: IUser): Promise<IUser | null > => {

  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string;
  }

  // set role
  user.role = 'student';
  const academicsemester = await AcademicSemester.findById(student.academicSemester);

  //generate student id
  const session = await mongoose.startSession()

  try {

    session.startTransaction()
    const id: string | undefined = await generateStudentId(academicsemester) as string;

    user.id =id
    student.id =id

    //array
    const newStudent =await Student.create([student],{session});

    if(!createStudent.length){
      throw new ApiError(httpStatus.BAD_REQUEST,'Failed to crete student')
    }

    //set student_id into user.student
    user.student=newStudent[0]._id
    const newUser =await User.create([user],{session});

    if(!newUser.length){
      throw new ApiError(httpStatus.BAD_REQUEST,'Failed to crete user')
    }

    await session.commitTransaction();
    await session.endSession();


  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
  }







  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create');
  }
  return createdUser;
};

export const UserService = {
  createStudent,
}