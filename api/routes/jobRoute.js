import express from 'express';
import formidable from 'express-formidable';
import { createJobController ,getJobController,getSingleJobController } from '../controllers/jobController.js';

const router=express.Router();

//create job route
router.post('/create-jobs',createJobController)

//getSingle Job route
router.get('/get-single-job/:id',getSingleJobController)

//get jobs
router.get("/get-all-jobs",getJobController)
export default router