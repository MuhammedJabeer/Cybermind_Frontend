// src/context/Jobcontext.jsx
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const JobModalProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const [salaryFilter,setSalaryFilter]=useState(0)
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <ModalContext.Provider value={{ jobs,setJobs,isFormOpen, openForm, closeForm,searchQuery,setSearchQuery ,locationFilter,setLocationFilter,jobTypeFilter,setJobTypeFilter,salaryFilter,setSalaryFilter}}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
