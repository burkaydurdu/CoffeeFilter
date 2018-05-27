import express from 'express';
import UserController from '../controller/user_controller.js'

var router = express.Router();

// ================= GET ======================

router.get('/', (req, res) => {
   res.render('pages/login', {});
});

// ================= POST =====================

router.post('/login', (req, res) => {
   var user = new UserController;
   user.onLogin(req.body);
});
export {router};
