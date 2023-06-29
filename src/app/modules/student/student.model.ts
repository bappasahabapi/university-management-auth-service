import { Schema,model } from "mongoose";
import { bloodGroup, gender } from "./student.constant";
import { IStudent } from "./student.interrface";

 export const StudentSchema = new Schema<IStudent, StudentModel>(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: {
                firstName: {
                    type: String,
                    required: true
                },
                middleName: {
                    type: String,
                    required: true
                },
                lastName: {
                    type: String,
                    required: true
                },
            },
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            enum: gender,
            // enum: ['male', 'female'],
        },
        bloodGroup: {
            enum: bloodGroup
            // enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-',]
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contactNo: {
            type: String,
            unique: true,
            required: true,
        },
        emergencyContactNo: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        },
        guardian: {
            required: true,
            type: {
                fatherName: {
                    type: String,
                    require: true
                },
                fatherOccupation: {
                    type: String,
                    require: true
                },
                fatherContactNo: {
                    type: String,
                    require: true
                },
                motherName: {
                    type: String,
                    require: true
                },
                motherOccupation: {
                    type: String,
                    require: true
                },
                motherContactNo: {
                    type: String,
                    require: true
                },
                address: {
                    type: String,
                    require: true
                },
            },
        },
        localGuardian: {
            required: true,
            type: {
                name: {
                    type: String,
                    require: true
                },
                occupation: {
                    type: String,
                    require: true
                },
                contactNo: {
                    type: String,
                    require: true
                },
                address: {
                    type: String,
                    require: true
                },
            }
        },
        profileImage: {
            type: String,
            required: true
        },
        academicFaculty: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicFaculty',
            required: true
        },
        academicDepartment: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicDepartment',
            required: true
        },
        academicSemester: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicSemester',
            required: true
        },

    }
)