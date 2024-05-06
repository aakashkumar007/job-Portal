import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobForm = () => {
    const [formData, setFormData] = useState({
        jobName: '',
        jobDesc: '',
        companyName: '',
        startDate: '',
        endDate: '',
        examDate:'',
        admitCardDate:'',
        genObcFee: 0,
        scStFee: 0,
        menMinAge: 18,
        menMaxAge: 35,
        womenMinAge: 18,
        womenMaxAge: 35,
        numberOfPosts: 0,
        link: '',
    });

    const [postInfo, setPostInfo] = useState([{ postName: '', totalPosts: 0, eligibility: '' }]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePostInfoChange = (index, field, value) => {
        setPostInfo(prevState => {
            const updatedPostInfo = [...prevState];
            updatedPostInfo[index][field] = value;
            return updatedPostInfo;
        });
    };



    const handleAddPostInfo = () => {
        setPostInfo(prevState => ([...prevState, { postName: '', totalPosts: 0, eligibility: '' }]));
      };

      const handleRemovePostInfo = (index) => {
        setPostInfo(prevState => {
          const updatedPostInfo = [...prevState];
          updatedPostInfo.splice(index, 1);
          return updatedPostInfo;
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        // Combine formData and postInfo into a single object
        const combinedFormData = {
          ...formData,
          postInfo:postInfo
        };
        console.log(postInfo);
    
        try {
          const { data } = await axios.post("http://localhost:4000/api/jobs/create-jobs", combinedFormData);
    
          if (data) {
            console.log(data);
            alert('Job posted successfully!');
          } else {
            alert("There is something wrong");
            throw new Error('Error posting job');
            
          }
        } catch (error) {
          console.log(error);
        }
      };
    

    return (
        <>
         <p className='text-center font-bold font-mono text-3xl text-green-700'>
         <Link to="/">
              Home
        </Link>
         </p>
        <div className="container mx-auto max-w-md mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className='text-center p-2 text-2xl font-semibold text-green-700 '>Create Job Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Job Name:</label>
                    <input type="text" id="jobName" name="jobName" value={formData.jobName} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="jobDesc" className="block text-gray-700 font-bold mb-2">Job Description:</label>
                    <textarea id="jobDesc" name="jobDesc" value={formData.jobDesc} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">Company Name:</label>
                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-gray-700 font-bold mb-2">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="endDate" className="block text-gray-700 font-bold mb-2">End Date:</label>
                    <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Exam Date:</label>
                    <input type="date" id="examDate" name="examDate" value={formData.examDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Admit Card Date:</label>
                    <input type="date" id="admitCardDate" name="admitCardDate" value={formData.admitCardDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">General/OBC Fee:</label>
                    <input type="number" id="genObcFee" name="genObcFee" value={formData.genObcFee} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="scStFee" className="block text-gray-700 font-bold mb-2">SC/ST Fee:</label>
                    <input type="number" id="scStFee" name="scStFee" value={formData.scStFee} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="menMinAge" className="block text-gray-700 font-bold mb-2">Men Min Age:</label>
                    <input type="number" id="menMinAge" name="menMinAge" value={formData.menMinAge} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="menMaxAge" className="block text-gray-700 font-bold mb-2">Men Max Age:</label>
                    <input type="number" id="menMaxAge" name="menMaxAge" value={formData.menMaxAge} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="womenMinAge" className="block text-gray-700 font-bold mb-2">Women Min Age:</label>
                    <input type="number" id="womenMinAge" name="womenMinAge" value={formData.womenMinAge} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Women Max Age:</label>
                    <input type="number" id="womenMaxAge" name="womenMaxAge" value={formData.womenMaxAge} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Number of Posts:</label>
                    <input type="number" id="numberOfPosts" name="numberOfPosts" value={formData.numberOfPosts} onChange={handleChange} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="link" className="block text-gray-700 font-bold mb-2">Link:</label>
                    <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                </div>
                <h1 className='className="block text-gray-700 font-bold mb-2"'>Post Information:</h1>
                {postInfo.map((post, index) => (
                    <div key={index}>
                        {/* Input for Post Name */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Post Name:</label>
                            <input type="text" value={post.postName} onChange={(e) => handlePostInfoChange(index, 'postName', e.target.value)} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                        </div>
                        {/* Input for Total Posts */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Total Posts:</label>
                            <input type="number" value={post.totalPosts} onChange={(e) => handlePostInfoChange(index, 'totalPosts', e.target.value)} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                        </div>
                        {/* Input for Eligibility */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Eligibility:</label>
                            <input type="text" value={post.eligibility} onChange={(e) => handlePostInfoChange(index, 'eligibility', e.target.value)} className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500" />
                        </div>
                        <button className="mt-2 font-bold mb-2 bg-red-500 p-3 text-white rounded" onClick={() => handleRemovePostInfo(index)}>Remove</button>
                    </div>))}
                <button type="button" onClick={handleAddPostInfo} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Post Info</button>
                {/* End of Post Info Fields */}

                <div className="mb-4">
                    <button onClick={handleSubmit} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2">Submit</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default JobForm;
