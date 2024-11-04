const { common, response } = require('../utils')
const { commonService } = require('../services')
const { gestureModel } = require('../models')

const create = common.catchAsync(async(req, res) => {
    const gesture = await commonService.create(gestureModel, req.body)
    return res.json(response.successResponse({ gesture }))
})

const getList = common.catchAsync(async(req, res) =>{
    const gesture = await commonService.getList(gestureModel, null, { createdAt : -1 })
    return res.json(response.successResponse({ gesture })) 
})

module.exports = {
    create,
    getList,
}