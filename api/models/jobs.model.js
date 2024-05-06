import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        jobName:{
            type:String,
            required:true
        },
        slug:{
            type: String,
            required:true
        },
        jobDesc:{
            type:String,
            required:true,
        },
        companyName:{
            type: String,
            required: true
        },
        date:{
            startDate:{
                type:Date,
                required:true,
            },
            endDate:{
                type:Date,
                required:true,
            },
            examDate:{
                type:Date,

            },
            admitCardDate:{
                type:Date,
            },
            
        },
        applicationFee:{
            genObcFee:{
                type:Number,
                default:0,
            },
            scStFee:{
                type:Number,
                default:0,
            }
        },
        ageLimit:{
            men:{
               min:{
                type:Number,
                default:18
               },
               max:{
                type:Number,
                default:35
               }
            },
            women:{
                min:{
                 type:Number,
                 default:18
                },
                max:{
                 type:Number,
                 default:35
                }
             }
            
        },
       
        numberOfPosts:{
            type:Number, 
            default:0
        },

        link:{
            type:String, // Changed to String
            required:true
        },
        postInfo: [
            {
                postName: String,
                totalPosts: Number,
                eligibility: String
            }
        ]
    },
    {
        timestamps:true
    }
);

// Set default values for nested objects
jobSchema.pre('save', function(next) {
    if (!this.ageLimit.men.min) this.ageLimit.men.min = 18;
    if (!this.ageLimit.men.max) this.ageLimit.men.max = 35;
    if (!this.ageLimit.women.min) this.ageLimit.women.min = 18;
    if (!this.ageLimit.women.max) this.ageLimit.women.max = 35;
    next();
});

export default mongoose.model("Jobs", jobSchema);
