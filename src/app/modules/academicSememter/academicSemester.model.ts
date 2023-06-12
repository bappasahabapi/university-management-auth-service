import { Schema, model } from 'mongoose';
import { AcademicSemesterModel, IAcademicSemester } from './academicSemester.interface';


const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: Number,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemister = model<IAcademicSemester, AcademicSemesterModel>('AcademicSemister', academicSemesterSchema);