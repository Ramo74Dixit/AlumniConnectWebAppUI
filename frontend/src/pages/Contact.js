import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative flex-grow">
        <img src="./C1.png" className="absolute h-[800px] w-full object-cover" />
        <div className="relative flex pt-[80px] pl-[80px]">
          <div className="bg-cyan-50 w-[530px] h-[530px] ml-[20px]">
            <div className="h-[340px] pl-[30px] pt-[100px]">
              <div className="font-extrabold mb-[20px] text-2xl font-serif">
                Contact Us
              </div>
              <div className="text-2xl font-sans">
                Learn more about HCLTech and how we're
                <br />
                supercharging progress for our <br />
                clients, our people, and our <br />
                communities.
              </div>
            </div>
            <div className="pl-[30px] mb-[30px] text-2xl font-serif">
              Ready to get started? Let's Talk.
            </div>
            <div className="pl-[30px] font-extrabold mb-[30px] font-serif">
              International Headquarters
            </div>
            <div className="pl-[30px] text-sm font-serif">
              HCL Technologies Ltd. | Technology Hub, SEZ <br />
              Plot No. 3A, Sector 126 | Noida - 201304, India
            </div>
          </div>

          {/* INPUT BOX */}
          <div className="bg-cyan-50 w-[580px] h-[530px] ml-[20px] mr-[80px] rounded-lg">
            <div>
              <div className="pt-[30px] pl-[20px] font-extrabold text-2xl font-serif">
                Contact Us
              </div>

              <div className="flex items-center gap-2 pt-[30px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Name</label>
                <input
                  placeholder="First Name"
                  className="pl-[10px] w-[130px] border border-gray-300 rounded-md"
                />
                <input
                  placeholder="Last Name"
                  className="pl-[10px] w-[130px] border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">
                  Profession
                </label>
                <input
                  placeholder="Status"
                  className="pl-[10px] w-[450px] border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">College</label>
                <input
                  placeholder="Name"
                  className="pl-[10px] w-[180px] border border-gray-300 rounded-md"
                />
                <input
                  placeholder="Zip"
                  className="pl-[10px] w-[80px] border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Phone</label>
                <input
                  placeholder="123-456-7890"
                  className="pl-[10px] w-[437px] border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold">Email</label>
                <input
                  placeholder="example@gmail.com"
                  className="pl-[10px] w-[437px] border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex items-center pt-[20px] pl-[20px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Terms and Conditions
                </label>
              </div>

              <div className="flex justify-center pt-[50px]">
                <div className="w-[90px] h-[36px] m-[10px] bg-slate-100 text-sm font-serif rounded-lg">
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
     <div className="h-28"></div>
    </div>
  );
};

export default Contact;
