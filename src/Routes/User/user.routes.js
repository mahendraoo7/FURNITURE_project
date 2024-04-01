const express = require('express');
const userRoute = express.Router();
const { userVerifyToken } = require('../../Helpers/userVerifyToken');
const { upload } = require('../../Helpers/imageUpload');
const {
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    updatePassword
} = require('../../Controller/User/user.controller');


// REGISTER USER
userRoute.get('/register-user', upload.single('profileImage'),registerUser);

// LOGIN USER
userRoute.post('/login-user',loginUser);

// GET ALL USER
userRoute.get('/get-All-User',userVerifyToken, getAllUser);

// GET SPECIFIC USER
userRoute.get('/get-User',userVerifyToken, getUser);

// UPDATE USER
userRoute.put('/update-User',userVerifyToken, updateUser);

// DELETE USER
userRoute.delete('/delete-User',userVerifyToken, deleteUser);

// UPDATE PASSWORD
userRoute.put('/update-Password',userVerifyToken, updatePassword);

module.exports = userRoute;