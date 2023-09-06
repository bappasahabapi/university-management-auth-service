import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';


export type IUser = {
  admin: Types.ObjectId;
  faculty: Types.ObjectId;
  id: string |undefined ;
  role: string ;
  password: string;
  student?:Types.ObjectId | IStudent;
  // faculty?:Types.ObjectId | IFaculty;
  // admin?:Types.ObjectId | IAdmin;
};
export type UserModel = Model<IUser, Record<string, unknown>>;
