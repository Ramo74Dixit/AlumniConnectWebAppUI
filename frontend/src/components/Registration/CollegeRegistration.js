import React from "react";

const CollegeRegistration = () => {
  return (
    <div className="relative">
      <img src="./S1.png" className="absolute w-full h-[850px]" />
      <div className="absolute flex">
        {/* Left */}
        <div className="ml-[230px] mt-[40px]">
          {/* Content */}
          <div className="pl-[20px] w-[350px]">
            <div className="font-extrabold text-3xl font-serif">
              College Registration{" "}
            </div>
            <div className="text-xl font-serif">
              Fill in the form to get in the touch{" "}
            </div>
          </div>
          {/* Images */}
          <div>
            <img src="./S2.png" className="absolute w-[350px] h-[500px]" />
          </div>
        </div>
        {/* Right */}
        <div className="bg-slate-50 rounded-md h-[570px] w-[500px] ml-[250px] mt-[40px]">
          <div className="pl-[28px] pt-[10px]">
            <div className="flex">
              <div className="mt-[25px]">
                <label className="font-serif text-xm font-bold">
                  College Name
                </label>
                <input
                  placeholder="input text"
                  className="pl-[10px] bg-slate-100"
                />
              </div>
              <div className="mt-[25px]">
                <label className="font-serif text-xm font-bold">
                  College Code
                </label>
                <input
                  placeholder="input text"
                  className="pl-[10px] bg-slate-100"
                />
              </div>
            </div>
            <div className="mt-[25px]">
              <label className="font-serif text-xm font-bold">
                College Establishing Year
              </label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
            </div>
            <div className="mt-[25px]">
              <label className="font-serif text-xm font-bold">
                College Director
              </label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
            </div>
            <div className="mt-[25px]">
              <label className="font-serif text-xm font-bold">
                Courses Available in College
              </label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
            </div>
            <div className="mt-[25px]">
              <label className="font-serif text-xm font-bold">
                No. of alumini
              </label>
              <div>
                <input
                  className="w-[420px] pl-[10px] bg-slate-100"
                  placeholder="input text"
                />
              </div>
            </div>  
            
              <div className="w-[430px] h-[36px] mt-[40px] bg-green-600 text-sm font-serif rounded">
                <button className="ml-[170px] mt-[10px] text-white">
                  Submit
                </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeRegistration;
