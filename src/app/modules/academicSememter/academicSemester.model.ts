import status from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.constant';
import { AcademicSemesterModel, IAcademicSemester } from './academicSemester.interface';

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

export const AcademicSemister = model<IAcademicSemester, AcademicSemesterModel>('AcademicSemister', academicSemesterSchema);
