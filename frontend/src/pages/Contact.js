import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="relative flex-grow">
        <img
          src="./C1.png"
          className="absolute h-[800px] w-full object-cover opacity-30"
          alt="Background"
        />
        <div className="relative flex pt-[80px] pl-[80px]">
          {/* Left Section with Original Glow Effect */}
          <div className="bg-gray-800 bg-opacity-80 w-[530px] h-[530px] ml-[20px] rounded-lg shadow-lg border border-white/20 ring-8 ring-cyan-500 shadow-[0_0_40px_10px_rgba(0,255,255,0.6)]">
            <div className="h-[340px] pl-[30px] pt-[100px] text-cyan-400">
              <div className="font-extrabold mb-[20px] text-2xl font-serif">
                Contact Us
              </div>
              <div className="text-xl font-sans">
                Learn more about My AlumniConnect Website and how we're
                <br />
                connecting alumni, facilitating collaboration, and 
                <br />
                building a strong community for our 
                <br />
                members.
              </div>
            </div>
            <div className="pl-[30px] mb-[30px] text-xl font-serif text-cyan-400">
              Ready to get started? Let's Talk.
            </div>
            <div className="pl-[30px] font-extrabold mb-[30px] font-serif text-cyan-400">
              Office Location
            </div>
            <div className="pl-[30px] text-sm font-serif text-gray-300">
              My AlumniConnect Website | Kulgaon Road <br />
              Rooma | Kanpur - 208001, India
            </div>
          </div>

          {/* Right Section with Enhanced Glow Effect */}
          <div className="bg-gray-800 bg-opacity-80 w-[580px] h-[530px] ml-[20px] mr-[80px] rounded-lg shadow-lg border border-white/20 ring-8 ring-cyan-500 shadow-[0_0_40px_10px_rgba(0,255,255,0.6)]">
            <div>
              <div className="pt-[30px] pl-[20px] font-extrabold text-2xl font-serif text-cyan-400">
                Contact Us
              </div>

              <div className="flex items-center gap-2 pt-[30px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold text-cyan-400">
                  Name
                </label>
                <input
                  placeholder="First Name"
                  className="pl-[10px] w-[130px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
                <input
                  placeholder="Last Name"
                  className="pl-[10px] w-[130px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold text-cyan-400">
                  Profession
                </label>
                <input
                  placeholder="Status"
                  className="pl-[10px] w-[450px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold text-cyan-400">
                  College
                </label>
                <input
                  placeholder="Name"
                  className="pl-[10px] w-[180px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
                <input
                  placeholder="Zip"
                  className="pl-[10px] w-[80px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold text-cyan-400">
                  Phone
                </label>
                <input
                  placeholder="123-456-7890"
                  className="pl-[10px] w-[437px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
              </div>

              <div className="flex items-center gap-2 pt-[20px] pl-[20px]">
                <label className="w-[80px] font-sans font-bold text-cyan-400">
                  Email
                </label>
                <input
                  placeholder="example@gmail.com"
                  className="pl-[10px] w-[437px] border border-gray-500 rounded-md bg-gray-700 text-white shadow-[0_0_20px_rgba(255,87,34,0.9)]"
                />
              </div>

              <div className="flex items-center pt-[20px] pl-[20px]">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-500 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-300"
                >
                  Terms and Conditions
                </label>
              </div>

              <div className="flex justify-center pt-[50px]">
                <div className="w-[90px] h-[36px] m-[10px] bg-slate-700 text-sm font-serif rounded-lg transition-all duration-500 hover:shadow-lg">
                  <button className="ml-[15px] mt-[10px] text-gray-300">
                    Go Back
                  </button>
                </div>
                <div className="w-[90px] h-[36px] m-[10px] bg-green-600 text-sm font-serif rounded-lg transition-all duration-500 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/50">
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
