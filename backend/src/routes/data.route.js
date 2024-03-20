import { createSample,getSample,updateSample,deleteSample,getAllSample } from "../controller/data.controller.js";
import {Router} from 'express'

const router = Router()

router.route('/createdata').post(createSample)
router.route('/getdata/:id').get(getSample)
router.route('/updatedata/:id').put(updateSample)
router.route('/deletedata/:id').delete(deleteSample)
router.route('/getalldata').get(getAllSample)

export default router