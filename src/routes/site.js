const express = require('express')
const route = require('.')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')


router.use('/search', siteController.search)
router.use('/', siteController.home)

module.exports = router

