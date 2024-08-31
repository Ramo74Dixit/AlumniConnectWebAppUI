import React from "react";

const StudentRegistration = () => {
  return (
    <div className="relative">
      <img src="./RC1.png" className="absolute w-full h-[850px]" />
      <div className="absolute flex">
        {/* Left */}
        <div className="ml-[230px] mt-[40px]">
          {/* Content */}
          <div className="pl-[20px] w-[350px]">
            <div className="font-extrabold text-3xl font-serif">
              Student Registration{" "}
            </div>
            <div className="text-xl font-serif">
              fill in the form to get in the touch{" "}
            </div>
          </div>
          {/* Images */}
          <div>
            <img
              src="./RC3.png"
              className="absolute w-[250px] h-[200px] mt-[300px] ml-[130px]"
            />
            <img src="./RC2.png" className="absolute w-[350px] h-[500px]" />
          </div>
        </div>
        {/* Right */}
        <div className="bg-slate-50 rounded-md h-[570px] w-[500px] ml-[250px] mt-[40px]">
          <div className="pl-[28px] pt-[30px]">
            <div className="text-3xl font-extrabold font-serif">
              Fill Details{" "}
            </div>
            <div className="font-serif text-xl">Sub-titles goes here</div>
            <div className="flex">
              <div className="mt-[25px]">
                <label className="font-sans text-xm font-bold">
                  First Name
                </label>
                <input
                  placeholder="input text"
                  className="pl-[10px] bg-slate-100"
                />
              </div>
              <div className="mt-[25px]">
                <label className="font-sans text-xm font-bold">Last Name</label>
                <input
                  placeholder="input text"
                  className="pl-[10px] bg-slate-100"
                />
              </div>
            </div>
            <div className="mt-[10px]">
              <label className="font-sans text-xm font-bold">
                Current Year
              </label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
              <div>Caption goes here</div>
            </div>
            <div className="mt-[10px]">
              <label className="font-sans text-xm font-bold">Branch</label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mt-[10px]">
                <label className="font-sans text-xm font-bold">Batch</label>
                <input
                  placeholder="input text"
                  className="pl-[10px] bg-slate-100"
                />
              </div>
              <div className="mt-[10px] ">
                <label className="font-sans text-xm font-bold">
                  College Name
                </label>
                <input
                  placeholder="input text"
                  className="pl-[10px] bg-slate-100"
                />
              </div>
            </div>
            <div className="mt-[10px]">
              <label className="font-sans text-xm font-bold">Position</label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
            </div>
            <div class="flex items-center mt-[40px] ">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I've read and accept the Terms and Conditions
              </label>
            </div>
            <div className="flex justify-center pt-[20px] pl-[250px] ">
              <div className="w-[90px] h-[36px] m-[10px] bg-slate-100 text-sm font-serif rounded-lg ">
                <button className="ml-[15px] mt-[10px]">Cancel</button>
              </div>
              <div className="w-[90px] h-[36px] m-[10px] bg-green-600 text-sm font-serif rounded-lg">
                <button className="ml-[20px] mt-[10px] text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
