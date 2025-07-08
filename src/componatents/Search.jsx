import React from 'react';
import { Search, MapPin, Briefcase, User } from 'lucide-react';
import { useModal } from '../context/Jobcontext';

function Searchs() {
  const{searchQuery,setSearchQuery,locationFilter,setLocationFilter,jobTypeFilter,setJobTypeFilter,salaryFilter,setSalaryFilter}=useModal()




  return (
   <div className="flex flex-col md:flex-row gap-4 items-center justify-between m-[50px]">

  {/* Search Input */}
  <div className="flex items-center gap-2 flex-1 basis-1/4">
    <Search className="w-5 h-5 text-[#686868]" />
    <input
      type="text"
      placeholder="Search By Job Title, Role"
      className="w-full px-4 py-2 border-none rounded-md focus:outline-none "
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
    />
  </div>

  {/* Vertical Line */}
  <div className="w-0 h-[48px] border-l-[2px] border-[#EAEAEA] opacity-100" />

  {/* Job Type Selector */}
 <div className="flex items-center gap-2 flex-1 basis-1/4">
   
    <MapPin className="w-5 h-5 text-[#686868]" />
    <select className="w-full px-4 py-2 border-none rounded-md focus:outline-none text-[#686868]" value={locationFilter} onChange={(e)=>setLocationFilter(e.target.value)}>
      <option  value="">Location</option>
      <option value="remote">Remote</option>
      <option value="Chennai">Chennai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Hyderabad">Hyderabad</option>
    </select>
  </div>

  {/* Vertical Line */}
  <div className="w-0 h-[48px] border-l-[2px] border-[#EAEAEA] opacity-100" />

  {/* Location Selector */}
 

    <div className="flex items-center gap-2 flex-1 basis-1/4">
     <User className="w-5 h-5 text-[#686868]" />
    <select className="w-full px-4 py-2 border-none rounded-md focus:outline-none text-[#686868]" value={jobTypeFilter} onChange={(e)=>setJobTypeFilter(e.target.value)}>
      <option value="">Job Type</option>
      <option value="full-time">Full-Time</option>
      <option value="part-time">Part-Time</option>
      <option value="internship">Internship</option>
      <option value="contract">Contract</option>
    </select>
  </div>

  {/* Vertical Line */}
  <div className="w-0 h-[48px] border-l-[2px] border-[#EAEAEA] opacity-100" />

  {/* Salary Range */}
  <div className="flex-1 basis-1/4 w-full">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-semibold text-gray-800">Salary Per Month</span>
      <span className="text-sm font-semibold text-gray-800">{salaryFilter} LPA</span>
    </div>
   <input
        type="range"
        min="0"
        max="100000"
        step="1000"
        value={salaryFilter}
        onChange={(e) => setSalaryFilter(Number(e.target.value))}
        className="w-full appearance-none h-[3px] bg-black rounded-full outline-none
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:bg-black
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:cursor-pointer

          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:bg-black
          [&::-moz-range-thumb]:border-2
          [&::-moz-range-thumb]:border-white
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:cursor-pointer"
      />
  </div>
</div>

  );
}

export default Searchs;
