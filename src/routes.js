const express = require('express')
const dashboardController = require('./controller/dashboard-controller')
const authController = require('./controller/auth-controller')
const authMiddleware = require('./middlewares/auth-middleware')

const router = express.Router()

// rotas do auth-controller
router.get('/', authController.index)
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/auth/logout', authMiddleware, authController.logout)

// rotas do dashboard-controller
router.get('/dashboard', authMiddleware, dashboardController.dashboard)

module.exports= router