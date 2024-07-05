import express from 'express';
import formidable from 'express-formidable';
import { createJobController ,getJobController,getSingleJobController,deleteJobController } from '../controllers/jobController.js';

const router=express.Router();

//create job route
router.post('/create-jobs',createJobController)

//getSingle Job route
router.get('/get-single-job/:id',getSingleJobController)

//get jobs
router.get("/get-all-jobs",getJobController)


//delete job route
router.delete("/delete-job/id",deleteJobController)

export default router;
