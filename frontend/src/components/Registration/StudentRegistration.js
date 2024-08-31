import React from "react";

const StudentRegistration = () => {
  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-no-repeat bg-center flex flex-row"
      style={{ backgroundImage: `url('/RC1.png')` }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-start items-start p-10">
        <h1 className="text-4xl font-bold mb-2">Student Registration</h1>
        <p className="text-xl mb-4">Fill in the form to get in touch</p>
        <div className="relative">
          <img
            src="/RC2.png"
            alt="Student Registration Image 1"
            className="rounded-lg mt-8 w-[350px] h-[500px]"
          />
          <img
            src="/RC3.png"
            alt="Student Registration Image 2"
            className="absolute top-1/2 left-[calc(100%+30px)] w-[250px] h-[200px]"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-start">Fill Details</h2>
          <p className="text-md mb-4">Sub-titles goes here</p>
          <form>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="currentYear">
                Current Year
              </label>
              <input
                type="text"
                id="currentYear"
                placeholder="Enter Current Year"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
              <p className="text-xs text-gray-500 mt-1">Caption goes here</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="branch">
                Branch
              </label>
              <input
                type="text"
                id="branch"
                placeholder="Enter Branch"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1" htmlFor="batch">
                  Batch
                </label>
                <input
                  type="text"
                  id="batch"
                  placeholder="Enter Batch"
                  className="w-full p-2 bg-[#f3f4f6] border rounded"
                />
              </div>
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
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="position">
                Position
              </label>
              <input
                type="text"
                id="position"
                placeholder="Enter Position"
                className="w-full p-2 bg-[#f3f4f6] border rounded"
              />
            </div>
            <div className="flex items-center mt-4">
              <input
                id="termsCheckbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="termsCheckbox"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                I've read and accept the Terms and Conditions
              </label>
            </div>
            <div className="flex justify-end pt-6 space-x-4">
              <button
                type="button"
                className="w-[90px] py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[90px] py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
