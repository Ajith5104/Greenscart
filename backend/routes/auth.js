const express = require('express');
const {registerUser,
     loginUser,
     logoutUser, 
     forgotPassword, 
     resetPassword, 
     getUserProfile,
     ChangePassword,
     updateProfile,
     getAllUsers,
     getUser,
     updateUser,
     deleteUser
    }=require('../controllers/authControllers')
const router = express.Router();
const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/authenticate')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').post(resetPassword);
router.route('/myprofile').get(isAuthenticatedUser,getUserProfile);
router.route('/password/change').put(isAuthenticatedUser,ChangePassword);
router.route('/update').put(isAuthenticatedUser,updateProfile);

//Admin routes
router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('admin'),getAllUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getUser)
                               .put(isAuthenticatedUser,authorizeRoles('admin'),updateUser)
                               .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteUser);


module.exports=router;