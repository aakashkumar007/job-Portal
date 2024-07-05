import jobsModel from "../models/jobs.model.js";
import slugify from "slugify";
// Controller to handle creating a new job
export const createJobController = async (req, res) => {
    try {
        // Parse the form data
        const { jobName, jobDesc, companyName, startDate, endDate,examDate,admitCardDate,genObcFee, scStFee, menMinAge, menMaxAge, womenMinAge, womenMaxAge, numberOfPosts, link,postInfo } = req.body;
        console.log(req.bo);

        const slug = slugify(jobName);

        // Construct the job object
        const jobData = {
            jobName,
            slug,
            jobDesc,
            companyName,
            date: { startDate, endDate,examDate,admitCardDate},
            applicationFee: { genObcFee, scStFee },
            ageLimit: {
                men: { min: menMinAge, max: menMaxAge },
                women: { min: womenMinAge, max: womenMaxAge }
            },
            numberOfPosts,
            link,
           postInfo
            // postInfo: [
            //     {
            //         postName,
            //         totalPosts,
            //         eligibility,
            //     }
            // ]
        };


        // Create a new job instance
        const newJob = new jobsModel(jobData);
        console.log(newJob);
        // Save the job to the database
        await newJob.save();

        // Send success response
        res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Error in creating job' });
    }
};

export const getJobController=async(req,res)=>{
    try {
        const jobs = await jobsModel.find()
        .sort({createdAt:-1})
        res.status(200).send({
            success:true,
            message: "Get all jobs",
            count : jobs.length,
            jobs
            
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting job",
            error
        })
    }
}

export const deleteJobController = async (req,res)=>{
    try{
        const jobId=req.params.id;
        const job=await jobsModel.findByIdAndDelete(jobId);
        res.status(200).send({
            success:true,
            message:"Job deleted successfully", 
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in deleting job",
            error
        })
    }
}

export const getSingleJobController = async (req, res) => {
    try {
        const singleJob = await jobsModel.findById(req.params.id);

        if (!singleJob) {
            return res.status(404).json({ message: 'No Job found with provided ID' });
        }

        res.status(200).json(singleJob);
    } catch (error) {
        console.error('Error in fetching single Job:', error);
        res.status(500).json({
            message: 'Error in fetching single Job',
            success: false,
            error
        });
    }
};
