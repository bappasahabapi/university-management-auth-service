import { z } from 'zod';
import { academicSemesterCodes, academicSemesterMonths } from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
    body: z.object({
        title: z.enum([...academicSemesterMonths]as [string,...string[]], {
            required_error: "Title ('Autumn', 'Summer', 'Fall') is required",
        }),
        year: z.number({
            required_error: "Year is required",
        }),
        code: z.enum([...academicSemesterCodes] as [string,...string[]], {
            required_error: "Code 01 or 02 or 03 , is required",
        }),
        startMonth: z.enum([...academicSemesterMonths]as [string,...string[]], {
            required_error: "Start month is required",
        }),
        endMonth: z.enum([...academicSemesterMonths] as [string,...string[]], {
            required_error: "End month is required",
        }),

    }),
});

export const AcademicSemesterValidation = {
    createAcademicSemesterZodSchema,
};
