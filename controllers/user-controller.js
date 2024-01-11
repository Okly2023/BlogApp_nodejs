import User from '../models/User.js';
import bcrypt from 'bcryptjs';

 export const getAllUsers = async (req, res, next) => {
    let users;
    try {
         users = await User.find();
    } catch (err) {
       return console.log(err);
    }
    if (!users) {
       return res.status(404).json({message: "No Users found"});
    }
    return res.status(200).json({users});
  };

export const signup = async (req, res, next) => {
   const { name, email, password } = req.body;
   let existingUser;
   try {
      existingUser = await User.findOne({ email });
   }catch (err) {
      return console.log(err);
   }
   if (existingUser) {
      return res.status(400).json({message: "User already exists"});
   }
   const hashedPassword = bcrypt.hashSync(password);
   
   const createdUser = new User({
      name,
      email,
      password: hashedPassword,
      blogs: []
   });
   try {
      await createdUser.save();
   } catch (err) {
      return console.log(err);
   }
   return res.status(201).json({createdUser});
}

export const login = async (req, res, next) => {
   const { email, password } = req.body;
   let existingUser;
   try {
      existingUser = await User.findOne({ email });
   }catch (err) {
      return console.log(err);
   }
   if (!existingUser) {
      return res
         .status(404)
         .json({message: "could not find user for this email"});
   }
   const isValidPassword = bcrypt.compareSync(password, existingUser.password);
   if (!isValidPassword) {
      return res.status(400).json({message: "Invalid password"});
   }
   return res.status(200).json({message: "Login successfully"});
}