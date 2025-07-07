import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../axios/axios';
import { useModal } from '../context/Jobcontext';

function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const {closeForm,setJobs}=useModal()
  const[Loader,setLoader]=useState('')

  const onSubmit = async (data) => {
    const salaryMin = data.salary_min || 0;
    const salaryMax = data.salary_max || 0;

    const jobData = {
      title: data.title,
      company_name: data.company_name,
      location: data.location,
      job_type: data.job_type,
      application_deadline: data.deadline,
      job_description: data.description,
      salary_range: `${salaryMin} - ${salaryMax}`
    };

    try {
      const response = await axios.post('/create', jobData);
      const newJob = response.data.data;
      setJobs((prev) => [newJob, ...prev]);
      console.log('Job created:', response.data.data);
      reset();
      closeForm()

    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
   <form
  onSubmit={handleSubmit(onSubmit)}
  className="mx-auto w-[848px] p-[40px]"
>
  <h2 className="font-bold text-[24px] text-center text-[#222222] mb-6">
    Create Job Opening
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Job Title</label>
      <input
        {...register('title', { required: true })}
        className="w-full h-[58px] mt-1 border border-[#BCBCBC] rounded-[10px] px-3 py-2"
        placeholder="e.g. Full Stack Developer"
      />
    </div>

    <div>
      <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Company Name</label>
      <input
        {...register('company_name', { required: true })}
        className="w-full h-[58px] mt-1 border border-[#BCBCBC] rounded-[10px] px-3 py-2"
        placeholder="e.g. Amazon, Microsoft"
      />
    </div>

    <div>
      <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Location</label>
      <select
        {...register('location', { required: true })}
        className="w-full h-[58px] mt-1 border border-[#BCBCBC] rounded-[10px] px-3 py-2"
      >
        <option value="">Choose Preferred Location</option>
        <option value="Remote">Remote</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>
    </div>

    <div>
      <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Job Type</label>
      <select
        {...register('job_type', { required: true })}
        className="w-full h-[58px] mt-1 border border-[#BCBCBC] rounded-[10px] px-3 py-2"
      >
        <option value="">Select Job Type</option>
        <option value="Full-time">FullTime</option>
        <option value="Part-time">PartTime</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>
  </div>

  {/* Salary Range + Deadline */}
  <div className="flex flex-wrap gap-4 mt-4">
    <div className="flex gap-2 w-full md:w-[376px]">
      <div className="w-1/2">
        <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Min Salary</label>
        <input
          {...register('salary_min')}
          type="text"
          placeholder="₹0"
          className="w-full h-[58px] mt-1 border px-3 py-2 rounded-[10px]"
        />
      </div>
      <div className="w-1/2">
        <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Max Salary</label>
        <input
          {...register('salary_max')}
          type="text"
          placeholder="₹12,00,000"
          className="w-full h-[58px] mt-1 border px-3 py-2 rounded-[10px]"
        />
      </div>
    </div>

    <div className="w-full md:w-[376px]">
      <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Application Deadline</label>
      <input
        {...register('deadline')}
        type="date"
        className="w-full h-[58px] mt-1 border border-[#BCBCBC] px-3 py-2 rounded-[10px]"
      />
    </div>
  </div>

  {/* Description */}
  <div className="mt-4">
    <label className="font-semibold text-[20px] leading-[100%] text-[#636363]">Job Description</label>
    <textarea
      {...register('description', { required: true })}
      rows={4}
      className="w-full h-[169px] mt-1 border border-[#BCBCBC] rounded-[10px] px-3 py-2"
      placeholder="Please share a description to let the candidate know more about the job role"
    />
  </div>

  {/* Buttons */}
  <div className="flex justify-between items-center mt-6">
    <button type="button" className="w-[232px] h-[59px] border-[1.5px] rounded-[10px] opacity-100 pt-4 pr-[60px] pb-4 pl-[60px] gap-[10px] border-[1.5px] border-[#222222] ">
      Save Draft ⌄
    </button>
    <button type="submit" className="w-[207px] h-[59px] rounded-[10px] opacity-100 pt-4 pr-[60px] pb-4 pl-[60px] gap-[10px] bg-[#00AAFF] text-white">
      Publish »
    </button>
  </div>
</form>

  );
}

export default Form;
