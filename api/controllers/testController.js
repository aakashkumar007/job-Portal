export const testController = async(req,res)=>{
   try {
    res.send({
        message:"This is a Test Controller"
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error'});
   }
}