// App.jsx
import React from 'react';
import Nav from './componatents/Nav';
import Searchs from './componatents/Search';
import JobList from './componatents/JobGrid';
import Form from './componatents/Form';
import { useModal } from './context/Jobcontext'; // make sure path is correct
import Header from './componatents/Header';

function App() {
  const { isFormOpen, closeForm } = useModal();

  return (
    <>
      {/* <Nav />
      <Searchs /> */}
       <Header/>
      <JobList />

      {/* Modal for Job Form */}
      {isFormOpen && (
         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white  rounded-[16px]  relative w-[848px]">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
