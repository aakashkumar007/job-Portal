import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../component/Spinner'; // Assuming a Spinner component
import axios from 'axios';
import { useParams } from 'react-router';

const SingleJobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/jobs/get-single-job/${id}`);
        console.log(response.data);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setIsLoading(false); // Always set loading state to false
      }
    };
    fetchJob();
  }, []);

  if (isLoading) {
    return <Spinner />; // Display a spinner while loading
  }

  return (
    <>
    <div className='text-center font-bold font-mono text-3xl text-green-700'>
      <nav>
        <ol>
          <li>
            <Link to="/">
              Home
            </Link>
          </li> 
        </ol>
      </nav>
    </div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-blue-500  font-bold mb-4 ">Job Description: <h3 className='font-semibold text-green-600'>{job?.jobDesc}</h3></h2>
      <table  className=" text-center w-full border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="border border-gray-300 font-bold px-4 py-2">Job Name</td>
            <td className="border border-gray-300 px-4 py-2">{job?.jobName}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Company Name</td>
            <td className="border border-gray-300 px-4 py-2">{job?.companyName}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Start Date</td>
            <td className="border border-gray-300 px-4 py-2">{formatDate(job?.date.startDate)}</td>
          </tr>
          <tr>
            <td className="border  font-bold border-gray-300 px-4 py-2">End Date</td>
            <td className="border border-gray-300 px-4 py-2">{formatDate(job?.date.endDate)}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Exam Date</td>
            <td className="border border-gray-300 px-4 py-2">{formatDate(job?.date.examDate)}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Admit Card Date</td>
            <td className="border border-gray-300 px-4 py-2">{formatDate(job?.date.admitCardDate)}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 font-bold py-2">General/OBC Fee</td>
            <td className="border border-gray-300 px-4 py-2">{job?.applicationFee.genObcFee}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">SC/ST Fee</td>
            <td className="border border-gray-300 px-4 py-2">{job?.applicationFee.scStFee}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Men Min Age</td>
            <td className="border  border-gray-300 px-4 py-2">{job?.ageLimit.men.min}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Men Max Age</td>
            <td className="border  border-gray-300 px-4 py-2">{job?.ageLimit.men.max}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Women Min Age</td>
            <td className="border  border-gray-300 px-4 py-2">{job?.ageLimit.women.min}</td>
          </tr>
          <tr>
            <td className="border  font-bold border-gray-300 px-4 py-2">Women Max Age</td>
            <td className="border border-gray-300 px-4 py-2">{job?.ageLimit.women.max}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Number of Posts</td>
            <td className=" border-gray-300 px-4 py-2">{job?.numberOfPosts}</td>
          </tr>
          <tr>
            <td className="border font-bold border-gray-300 px-4 py-2">Link (Apply here )</td>
            <td className="border  border-gray-300 px-4 py-2"> <a className='text-blue-500 ' href={job?.link} target="_blank" rel="noopener noreferrer">
                 {job?.link}
              </a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-blue-500 font-bold mb-4">Job Information Post Wise</h2>
      <table className="w-full  text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Post Name</th>
            <th className="border border-gray-300 px-4 py-2">Number of Posts</th>
            <th className="border border-gray-300 px-4 py-2">Eligibility</th>
          </tr>
        </thead>
        <tbody>
          {job.postInfo.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.postName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.totalPosts}</td>
              <td className="border border-gray-300 px-4 py-2">{item.eligibility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </>

    
  );
};

export default SingleJobPage;
