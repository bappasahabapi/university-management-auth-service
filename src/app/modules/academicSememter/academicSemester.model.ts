import { Schema, model } from 'mongoose';
import { AcademicSemesterModel, IAcademicSemester } from './academicSemester.interface';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import status from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
    {
        title: {
            type: String,
            required: true,
            enum: academicSemesterTitles
        },
        year: {
            type: Number,
            required: true,
        },
        code: {
            type: String,
            required: true,
            enum: academicSemesterCodes
        },
        startMonth: {
            type: String,
            required: true,
            enum: academicSemesterMonths
        },
        endMonth: {
            type: String,
            required: true,
            enum: academicSemesterMonths
        },
    },
    {
        timestamps: true,
    }
);

export const AcademicSemister = model<IAcademicSemester, AcademicSemesterModel>('AcademicSemister', academicSemesterSchema);

//todo: Handling same year same semester issue(using pre hook )
// Data-> check? same year && same semister 

academicSemesterSchema.pre("save",async function(next){
    const isExist = await AcademicSemister.findOne({title:this.title , year:this.year});
    if(isExist){
        throw new ApiError(status.CONFLICT,'Academic semester is already exist !')
    }
    //mongoose hook er next()
    next();
});