/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../../config';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty'
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin'
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);


//todo: Using pre hook for common utility hash passwording
//User.create() / user.save()

userSchema.pre('save', async function (next) {

  //hashing user password
  const user =this;
  // console.log(this) --> er vitore password ta pabo
  // this.password = await bcrypt.hash(
  //   this.password,
  //   Number(config.bycrypt_salt_rounds)
  // )
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  )



  next();
})




export const User = model<IUser, UserModel>('User', userSchema);
