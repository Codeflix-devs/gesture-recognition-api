const express = require('express')
const { gestureController } = require('../../controllers')

const router = express.Route()

router.router("/").post(gestureController.create).get(gestureController.getList)

module.exports = router