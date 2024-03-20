import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {Data} from '../models/data.model.js';

const createSample= asyncHandler(async(req,res)=>{
    const {price, volume} = req.body

    if(!price || !volume){
        throw new ApiError(400, 'Invalid input')
    }

    const {h24,h6,h1,m5} = volume


    const data = new Data({price,volume:{h24,h6,h1,m5}})
    await data.save()

    if(!data){
        throw new ApiError(500, 'Internal server error')
    }

    return res
    .status(201)
    .json(new ApiResponse(201, data, 'Data created'))
})

const getSample = asyncHandler(async(req,res)=>{
    const {id} = req.params
    const data = await Data.findById(id)

    if(!data){
        throw new ApiError(404, 'Data not found')
    }

    return res
    .status(200)
    .json(new ApiResponse(200, data, 'Data found'))
})

const updateSample = asyncHandler(async(req,res)=>{
    const {price, volume} = req.body

    if(!price || !volume){
        throw new ApiError(400, 'Invalid input')
    }

    const {h24,h6,h1,m5} = volume

    const data = await Data.findByIdAndUpdate(id,{price,volume:{h24,h6,h1,m5}},{new:true})

    if(!data){
        throw new ApiError(404, 'Data not found')
    }

    return res
    .status(200)
    .json(new ApiResponse(200,data,'Data updated'))
})

const deleteSample = asyncHandler(async(req,res)=>{
    const {id} = req.params
    const data = await Data.findByIdAndDelete(id)

    if(!data){
        throw new ApiError(404, 'Data not found')
    }

    return res
    .status(200)
    .json(new ApiResponse(200,data,'Data deleted'))
})

const getAllSample = asyncHandler(async(req,res)=>{
    const data = await Data.find()

    if(!data){
        throw new ApiError(404, 'Data not found')
    }

    return res
    .status(200)
    .json(new ApiResponse(200, data, 'Data found'))
})

export {
    createSample,
    getSample,
    updateSample,
    deleteSample,
    getAllSample
}