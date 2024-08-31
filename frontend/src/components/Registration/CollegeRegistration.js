import React from "react";

const CollegeRegistration = () => {
  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-no-repeat bg-center flex flex-row"
      style={{ backgroundImage: `url('/S1.png')` }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-start items-start p-10">
        <h1 className="text-4xl font-bold mb-2">College Registration</h1>
        <p className="text-xl mb-4">Fill in the form to get in touch</p>
        <img
          src="/S2.png"
          alt="College Registration Image"
          className="rounded-lg mt-8 w-[350px] h-[500px]" 
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-start">
            Fill Your Details
          </h2>
          <form>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="collegeName">
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  placeholder="Enter College Name"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="collegeCode">
                  College Code
                </label>
                <input
                  type="text"
                  id="collegeCode"
                  placeholder="Enter College Code"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="establishingYear">
                College Establishing Year
              </label>
              <input
                type="text"
                id="establishingYear"
                placeholder="Enter Establishing Year"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="collegeDirector">
                College Director
              </label>
              <input
                type="text"
                id="collegeDirector"
                placeholder="Enter Director Name"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="coursesAvailable">
                Courses Available in College
              </label>
              <input
                type="text"
                id="coursesAvailable"
                placeholder="Enter Available Courses"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="numOfAlumni">
                No. of Alumni
              </label>
              <input
                type="text"
                id="numOfAlumni"
                placeholder="Enter Number of Alumni"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CollegeRegistration;
