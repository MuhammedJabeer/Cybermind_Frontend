import React, { useEffect, useState } from 'react';
import { User, MapPin, IndianRupee } from 'lucide-react';
import axios from '../axios/axios';
import { useModal } from '../context/Jobcontext';

function JobGrid() {
  const { jobs, setJobs, searchQuery, locationFilter, jobTypeFilter, salaryFilter } = useModal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('/getjob');
        setJobs(res.data.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [setJobs]);

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = locationFilter === '' || job.location?.toLowerCase() === locationFilter.toLowerCase();
    const jobTypeMatch = jobTypeFilter === '' || job.job_type?.toLowerCase() === jobTypeFilter.toLowerCase();

    const [jobMin] = (job.salary_range || '0-0').split('-').map((val) => parseInt(val));
    const matchSalary = isNaN(salaryFilter) || isNaN(jobMin) ? true : jobMin >= salaryFilter;

    return titleMatch && locationMatch && jobTypeMatch && matchSalary;
  });

  const skeletonArray = new Array(8).fill(null); 

  return (
    <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
      {loading
        ? skeletonArray.map((_, index) => (
            <div
              key={index}
              className="w-full h-[360px] bg-white rounded-[12px] shadow-[0px_0px_14px_0px_#D3D3D326] p-5 animate-pulse"
            >
              <div className="w-[83px] h-[82px] bg-gray-300 rounded-[13px] mb-4" />
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-3" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-2/3 mb-4" />
              <div className="h-3 bg-gray-100 rounded w-full mb-2" />
              <div className="h-3 bg-gray-100 rounded w-[80%] mb-4" />
              <div className="h-[46px] bg-gray-300 rounded-[10px] w-full" />
            </div>
          ))
        : filteredJobs.map((job, index) => (
            <div
              key={index}
              className="relative w-full h-[360px] rounded-[12px] shadow-[0px_0px_14px_0px_#D3D3D326] text-black bg-white px-5 pt-[100px] pb-6 mx-auto"
            >
              <div className="absolute top-[30px] left-[258px] w-[75px] h-[33px] rounded-[10px] px-[10px] py-[7px] bg-[#B0D9FF] text-[14px] font-medium flex items-center justify-center">
                24h Ago
              </div>
              <img
                src={job.logo || "https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png"}
                alt={job.company_name || "Company Logo"}
                className="absolute top-[15px] left-[16px] w-[83.46px] h-[82px] rounded-[13.18px] border border-white shadow-[0px_0px_10.25px_0px_#94949440]"
              />
              <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2 gap-2 flex-wrap">
                <User className="w-4 h-4" /> {job.experience || '1–3 yr Exp'}
                <MapPin className="w-4 h-4" /> {job.location || 'Onsite'}
                <IndianRupee className="w-4 h-4" /> {job.salary_range || '12LPA'}
              </div>
              <ul className="text-sm text-gray-500 mb-4 list-disc pl-4 overflow-y-auto">
                <li>{job.job_description || 'A user-friendly interface lets you browse stunning photos and videos'}</li>
                <li>{job.job_description || 'A user-friendly interface lets you browse stunning photos and videos'}</li>
              </ul>
              <button className="w-[312px] absolute top-[296px] h-[46px] bg-[#00AAFF] border border-[#00AAFF] text-white text-[14px] font-medium text-center rounded-[10px] px-[10px] py-[12px] flex items-center justify-center gap-[10px] hover:brightness-110 transition">
                Apply Now
              </button>
            </div>
          ))}
    </div>
  );
}

export default JobGrid;
