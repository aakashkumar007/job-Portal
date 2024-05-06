import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import JobForm from './page/CreateJob';
import './App.css'
import './index.css'
import HomePage from './page/HomePage';
import SingleJobPage from './page/SingleJobPage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createJobAdmin" element={<JobForm/>}/>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/jobs/:id" Component={SingleJobPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App