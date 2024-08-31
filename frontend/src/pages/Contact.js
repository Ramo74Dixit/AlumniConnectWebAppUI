import React from "react";

const Contact = () => {
  return (
    <div className="relative">
      <img src="./C1.png" className="absolute h-[800px]  w-[1800px]" />
      <div className="absolute">
        <div className="flex pt-[80px] pl-[80px] ">
          <div className="bg-cyan-50 w-[530px] h-[530px] ml-[20px] ">
            <div className="h-[340px] pl-[30px] pt-[100px] ">
              <div className="font-extrabold mb-[20px] text-2xl font-serif">
                Contact Us
              </div>
              <div className="text-2xl font-sans">
                Learn more about HCLTech and how we're
                <br />
                supercharging progress for our <br />
                clients , our people and our <br />
                communities
              </div>
            </div>
            <div className="pl-[30px] mb-[30px] text-2xl font-serif">
              Ready to get started ? Let's Talk .
            </div>
            <div className="pl-[30px] font-extrabold mb-[30px] font-serif">
              International HeadQuarters
            </div>
            <div className="pl-[30px] text-sm font-serif">
              HCL Technologies Ltd. | Technology Hub , SEZ <br />
              Plot No. 3A , Sector 126 | Noida - 201304 , India
            </div>
          </div>
          {/* INPUT BOX */}
          <div className="bg-cyan-50 w-[580px] h-[530px] ml-[250px] rounded-lg">
            <div>
              <div className="pt-[30px] pl-[20px] font-extrabold text-2xl font-serif">
                Contact Us
              </div>
              <div className="flex pt-[30px] pl-[20px] ">
                <label className="w-[80px] font-sans font-bold">Name</label>
                <div className="ml-[10px]">
                  <input placeholder="firstname" className="pl-[20px]" />
                </div>
                <div className="ml-[10px]">
                  <input
                    placeholder="lastname"
                    className="pl-[20px] w-[237px]"
                  />
                </div>
              </div>
              <div className="flex pt-[20px] pl-[20px] h-[40px] ">
                <label className="w-[80px] font-sans font-bold">
                  Profession
                </label>
                <div className="ml-[10px]">
                  <input
                    placeholder="status"
                    className="pl-[20px] h-[50px] w-[450px]"
                  />
                </div>
              </div>
              <div className="flex pt-[50px] pl-[20px]">
                <label className="w-[80px] font-bold font-sans ">College</label>
                <div className="ml-[10px]">
                  <input placeholder="name" className="pl-[10px]" />
                </div>
                <div className="ml-[60px]">
                  <input placeholder="Zip" className="pl-[15px]" />
                </div>
              </div>
              <div className="flex pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Phone</label>
                <div className="ml-[10px]">
                  <input
                    placeholder="123-456-7890"
                    className="pl-[20px] w-[437px]"
                  />
                </div>
              </div>
              <div className="flex pt-[15px] pl-[20px] ">
                <label className="w-[80px] font-sans font-bold ">Email</label>
                <div className="ml-[10px]">
                  <input
                    placeholder="example@gmail.com"
                    className="pl-[20px] w-[437px]"
                  />
                </div>
              </div>
              <div class="flex items-center pt-[20px] pl-[20px] ">
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
                  Terms and Conditions
                </label>
              </div>
              <div className="flex justify-center pt-[100px] pl-[320px] ">
                <div className="w-[90px] h-[36px] m-[10px] bg-slate-100 text-sm font-serif rounded-lg ">
                  <button className="ml-[15px] mt-[10px]">Go Back</button>
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
    </div>
  );
};

export default Contact;
