import {RequestHandler} from 'express'
import usersService from './users.service'

const createUser:RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    next(err)
}
}
export default{
  createUser
}
