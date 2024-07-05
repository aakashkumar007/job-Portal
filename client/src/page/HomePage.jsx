import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  // State to store the list of jobs
  const [jobs, setJobs] = useState([]);

  // Function to fetch jobs from the API
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/jobs/get-all-jobs');
      setJobs(response.data.jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <h1 className='text-center font-bold text-white rounded bg-green-700 animate-bounce p-2 m-3'>Currently We are under Development</h1>
      <h1 className='text-3xl text-white bg-yellow-800 p-2 flex '> <FaSearch className='m-1 pr-2' />Job Finder</h1>
      <div className='bg-green-700 text-white p-2'>
        <nav className="flex justify-around overflow-x-auto">
          <Link className='bg-yellow-600 p-2 rounded' to="/">Home</Link>
          <Link className='bg-yellow-600 p-2 rounded' to="/all-jobs">All Jobs</Link>
          <Link className='bg-yellow-600 p-2 rounded' to="/latest-results">Latest Results</Link>
          <Link className='bg-yellow-600 p-2 rounded' to="/admit-cards">Admit Cards</Link>
          <Link className='bg-yellow-600 p-2 rounded flex items-center' to="/search">
            Search <FaSearch className="ml-1" />
          </Link>
        </nav>
      </div>
      <div className='border-2 border-green-600 p-6 text-2xl m-3 inline-block'>
        <label className='font-mono font-bold bg-yellow-600 inline-block p-2 text-white text-xl '>Job List</label>
        <ol className='p-2'>
          {jobs.map(job => (
            <li key={job._id}>
              <h3>
                <Link className='underline text-blue-600' to={`/jobs/${job._id}`}>{job.jobName}</Link>
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default HomePage;
