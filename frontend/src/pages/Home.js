import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import { FaSearch } from "react-icons/fa";
import TopAlumlist from "../components/TopAlumlist";
import bgg from "../assets/slider1.png";
import bghomesecond from "../assets/bg-home-second.png";
import bghomefourth from "../assets/bg-home-4.png";
import bghomeCard1 from "../assets/HomeCardImg1.png";
import bghomeCard2 from "../assets/HomeCardImg2.png";
import bghomeCard3 from "../assets/HomeCardImg3.png";
import bghomeCard4 from "../assets/HomeCardImg4.png";
import bghomeCard5 from "../assets/HomeCardImg5.png";
const HeroPage = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[100vw] z-10 m-0 p-0 bg-gray-900">
      <div className="relative w-full h-[90vh]" onClick={scrollToNextSection}>
        <video
          src="./bg-video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-6">
          <h1 className="text-[#E0FFFF] text-7xl font-bold animate__animated animate__fadeIn animate__delay-1s">
            <Typewriter
              text="Join the Alumni Network Today"
              cursorColor="transparent"
              typeSpeed={100}
              eraseSpeed={50}
              eraseDelay={1500}
              typingDelay={500}
            />
          </h1>
          <p className="text-3xl font-serif text-[#E0FFFF] font-bold mt-8 animate__animated animate__fadeIn animate__delay-2s">
            Connect with fellow graduates and expand your professional network
          </p>
          <button className="bg-blue-600 text-gray-900 w-[120px] h-[40px] mt-10 rounded-lg hover:bg-blue-500 transition-transform transform hover:scale-105">
            <Link
              to="/login"
              className="flex items-center justify-center h-full"
            >
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <div
        className="w-[100vw] h-[93vh] bg-cover bg-center flex"
        style={{
          backgroundImage: `url(${bghomesecond})`,
          backgroundBlendMode: "overlay",
        }}
        id="next-section"
      >
        <div className="flex-grow flex flex-col justify-center items-start text-left space-y-6 px-10">
          <h3 className="text-6xl font-extrabold text-white transition-transform transform hover:scale-110 hover:text-red-600 duration-300 shadow-lg">
            <span className="text-red-600">Unlock</span> Your Career
          </h3>
          <p className="font-medium text-gray-200 text-xl leading-relaxed">
            Explore opportunities from across the globe to learn, showcase{" "}
            <br />
            skills, gain CV points & get hired by your dream company.
          </p>
          <button className="w-[15vw] h-[6vh] bg-gradient-to-r from-orange-500 to-red-500 hover:from-slate-500 hover:to-slate-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
            <Link to="/login">Explore Now</Link>
          </button>
        </div>

        <div className="ml-auto mr-8 w-[50vw] h-[80vh] mt-20">
          <div className="grid grid-cols-2 gap-6 p-4 bg-cover">
            <a href="#section1" className="block">
              <div className="p-2 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-sm transition-transform transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl duration-300">
                <img
                  src={bghomeCard1}
                  alt="Card 1"
                  className="w-[8cm] h-[5cm] rounded-lg transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </a>
            <a href="#section2" className="block">
              <div className="p-2 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-sm transition-transform transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl duration-300">
                <img
                  src={bghomeCard2}
                  alt="Card 2"
                  className="w-[8cm] h-[5cm] rounded-lg transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </a>
            <a href="#section3" className="block">
              <div className="p-2 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-sm transition-transform transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl duration-300">
                <img
                  src={bghomeCard3}
                  alt="Card 3"
                  className="w-[8cm] h-[5cm] rounded-lg transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </a>
            <a href="#section4" className="block">
              <div className="p-2 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-sm transition-transform transform hover:scale-105 hover:-translate-y-3 hover:shadow-2xl duration-300">
                <img
                  src={bghomeCard4}
                  alt="Card 4"
                  className="w-[8cm] h-[5cm] rounded-lg transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex w-full h-[80vh] space-x-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <TopAlumlist />
      </div>
      <button className="bg-orange-500 mb-4 w-[15vw] h-[8vh] rounded-full text-center text-white font-bold text-xl mt-8 ml-[42vw] hover:bg-white border border-4 border-orange-500 hover:text-orange-500">
        <Link to="/alumnidirectory">Explore More</Link>
      </button>
      <div className="w-[100vw] h-[92vh] flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-700">
        <div className="mt-5 z-10">
          <h1 className="text-5xl font-bold text-white text-center">
            <span className="text-blue-500">Personalised</span> Mentor Support
          </h1>
          <p className="text-gray-300 text-lg text-center">
            Select a mentor from a pool of 2000+ industry experts & get 1-on-1
            mentorship!
          </p>
        </div>
        <div className="w-[90%] mt-1 border-t border-gray-600 my-4"></div>
        <div
          className="w-full flex justify-start px-8 z-10"
          style={{ marginTop: "16px" }}
        >
          <button
            className="flex items-center space-x-2 bg-blue-800 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-900 transition duration-300"
            style={{ marginLeft: "28px" }}
          >
            <FaSearch className="w-4 h-4" />
            <span>Find a Mentor</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-blue-800 font-medium py-2 px-4 border-[2px] border-blue-800  rounded-full  ml-auto mr-12">
            <span>Become a Mentor</span>
          </button>
        </div>

        <div className="relative h-[90vh] w-full flex justify-center items-center">
          <img
            src={bghomeCard5}
            alt="Mentor Support"
            className="object-contain absolute bottom-1 right-10"
          />
        </div>
      </div>
      <div
  className="w-[100vw] h-[70vh] bg-cover bg-center flex relative overflow-hidden"
  style={{
    backgroundImage: `url(${bghomefourth})`,
    backgroundBlendMode: "overlay",
  }}
  id="next-section"
>
  {/* Animated Overlay Effect */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-40 mix-blend-multiply animate-fadeIn"></div>

  <div className="ml-16 mt-24 z-10">
    {/* Title and Description with Subtle Fade-In Animation */}
    <h3 className="text-blue-900 text-5xl font-bold animate-slideUp">
      Browse Job / Internship
    </h3>
    <h3 className="text-5xl font-bold text-gray-800 mt-2 animate-slideUp">
      That’s Right For You!
    </h3>
    <p className="mt-5 text-xl text-gray-600 animate-fadeInSlow">
      Find a role that fits your career aspirations.
    </p>

    {/* Buttons with Hover Effects */}
    <div className="flex flex-col justify-center space-x-4 mt-4 animate-fadeInSlow">
      <div className="flex">
        <button className="flex items-center space-x-2 bg-blue-900 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out">
          <FaSearch className="w-4 h-4" />
          <span>Find Jobs</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-800 font-medium py-2 px-4 border-[1px] ml-4 border-gray-600 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out">
          <span>Full Time</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-800 font-medium py-2 px-4 border-[1px] ml-4 border-gray-600 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out">
          <span>Part Time</span>
        </button>
      </div>
      <div className="flex mt-3">
        <button className="flex items-center space-x-2 text-blue-800 font-medium py-2 px-4 border-[1px] border-gray-600 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out">
          <span>Work from Home</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-800 font-medium py-2 px-4 border-[1px] ml-4 border-gray-600 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out">
          <span>On Field</span>
        </button>
      </div>
    </div>
  </div>

  {/* Job Cards with Hover Effects and Animation */}
  <div className="pt-1 flex z-10">
    <div className="mt-16 ml-10 w-[22vw] h-[55vh] bg-white rounded-3xl shadow-2xl shadow-slate-500 p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Jobs</h2>
        <div className="flex space-x-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-blue-200 transition duration-200 ease-in-out">
          <div>
            <h3 className="text-md font-medium text-gray-800">Web Developer</h3>
            <p className="text-sm text-gray-500">Software Development</p>
          </div>
          <span className="text-gray-400 font-bold">→</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-blue-200 transition duration-200 ease-in-out">
          <div>
            <h3 className="text-md font-medium text-gray-800">Data Science</h3>
            <p className="text-sm text-gray-500">Computer Science</p>
          </div>
          <span className="text-gray-400 font-bold">→</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-blue-200 transition duration-200 ease-in-out">
          <div>
            <h3 className="text-md font-medium text-gray-800">Digital Marketing</h3>
            <p className="text-sm text-gray-500">Marketing</p>
          </div>
          <span className="text-gray-400 font-bold">→</span>
        </div>
      </div>
    </div>

    <div className="mt-16 ml-10 w-[22vw] h-[55vh] bg-white rounded-3xl shadow-2xl shadow-slate-500 p-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Internships</h2>
        <div className="flex space-x-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            alt="IBM"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            alt="Samsung"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="w-8 h-8 rounded-full bg-white p-1 shadow-md"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
          <div>
            <h3 className="text-md font-medium text-gray-800">Web Developer</h3>
            <p className="text-sm text-gray-500">Software Development</p>
          </div>
          <span className="text-gray-400 font-bold">→</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
          <div>
            <h3 className="text-md font-medium text-gray-800">Content Writing</h3>
            <p className="text-sm text-gray-500">Content</p>
          </div>
          <span className="text-gray-400 font-bold">→</span>
        </div>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-full border border-gray-200 cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
          <div>
            <h3 className="text-md font-medium text-gray-800">UI/UX Designer</h3>
            <p className="text-sm text-gray-500">Design</p>
          </div>
          <span className="text-gray-400 font-bold">→</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default HeroPage;
