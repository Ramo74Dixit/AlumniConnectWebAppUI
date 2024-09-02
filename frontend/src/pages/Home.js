import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "react-typewriter-effect";
import TopAlumlist from "../components/TopAlumlist";

const profiles = [
  {
    image: "/AlumImage.png",
    fullName: "John Doe",
    title: "Software Engineer",
    tagline: "Building scalable web applications",
  },
  {
    image: "/AlumImage.png",
    fullName: "Jane Smith",
    title: "Product Manager",
    tagline: "Leading product teams to success",
  },
  {
    image: "/AlumImage.png",
    fullName: "Alice Johnson",
    title: "UX Designer",
    tagline: "Crafting intuitive user experiences",
  },
];

const HeroPage = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full z-10 bg-gray-900">
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
      <div className="w-[80vw] h-[90vh] mt-8 ml-[10vw]" id="next-section">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[30vw] h-[40vh] bg-gray-800 m-3 rounded-3xl flex flex-col relative overflow-hidden shadow-lg hover:scale-105 hover:z-10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-blue-300 ml-6 mt-10 animate__animated animate__fadeIn animate__delay-1s">
              Feature name
            </h2>
            <p className="mt-2 text-[20px] font-normal text-gray-300 ml-6 animate__animated animate__fadeIn animate__delay-2s">
              Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
              veniam cupidatat
            </p>
            <Link
              to="#"
              className="mt-auto mb-6 underline text-blue-300 ml-6 hover:text-blue-200 animate__animated animate__fadeIn animate__delay-3s"
            >
              Try Now
            </Link>
            <img
              src="/home-div-1.png"
              alt="Feature 1"
              className="absolute bottom-[-70px] right-[-50px] w-[200px] h-[200px] object-contain ml-[40px] mt-auto overflow-hidden transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="w-full md:w-[60vw] h-[40vh] bg-gray-700 m-3 rounded-lg shadow-md p-4 relative flex items-center hover:scale-105 hover:z-10 transition-all duration-300">
            <div>
              <h2 className="text-3xl font-bold text-blue-300">Feature name</h2>
              <p className="mt-2 text-[20px] font-normal text-gray-200 w-[30vw]">
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
                veniam cupidatat ullamco ulla
              </p>
              <Link
                to="#"
                className="underline text-blue-300 text-sm mt-2 inline-block hover:text-blue-200"
              >
                Try now
              </Link>
            </div>
            <img
              src="/home-div-2.png"
              alt="Feature 2"
              className="absolute right-4 top-4 w-[280px] h-[280px] object-contain transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60vw] h-[40vh] bg-gray-700 m-3 rounded-lg shadow-md p-4 relative flex items-center hover:scale-105 hover:z-10 transition-all duration-300">
            <div>
              <h2 className="text-3xl font-bold text-blue-300">Feature name</h2>
              <p className="mt-2 text-[20px] font-normal text-gray-200 w-[30vw]">
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
                veniam cupidatat ullamco ulla
              </p>
              <Link
                to="#"
                className="underline text-blue-300 text-sm mt-2 inline-block hover:text-blue-200"
              >
                Try now
              </Link>
            </div>
            <img
              src="/home-div-3.png"
              alt="Feature 3"
              className="absolute right-4 top-4 w-[200px] h-[200px] object-contain transform hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="w-full md:w-[30vw] h-[40vh] bg-gray-800 m-3 rounded-3xl flex flex-col relative overflow-hidden shadow-lg hover:scale-105 hover:z-10 transition-all duration-300">
            <h2 className="text-3xl font-bold text-blue-300 ml-6 mt-10">
              Feature name
            </h2>
            <p className="mt-2 text-[20px] font-normal text-gray-300 ml-6">
              Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
              veniam cupidatat
            </p>
            <Link
              to="#"
              className="mt-auto mb-6 underline text-blue-300 ml-6 hover:text-blue-200"
            >
              Try Now
            </Link>
            <img
              src="/home-div-4.png"
              alt="Feature 4"
              className="absolute bottom-[-90px] right-[-50px] w-[200px] h-[200px] object-contain ml-[40px] mt-auto overflow-hidden transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex w-full h-[30vw] space-x-4">
        {profiles.map((profile, index) => (
          <TopAlumlist
            // key={index}
            // image={profile.image}
            // fullName={profile.fullName}
            // title={profile.title}
            // tagline={profile.tagline}
          />
        ))}
      </div> */}
    <div className="flex w-full h-[37vw] space-x-4 bg-slider">
  <TopAlumlist />
</div>

      <button className="bg-orange-500 mb-4 w-[15vw] h-[8vh] rounded-full text-center text-white font-bold text-xl mt-8 ml-[42vw] hover:bg-white border border-4 border-orange-500 hover:text-orange-500">
        <Link to="/alumnidirectory">Explore More</Link>
      </button>
    </div>
  );
};

export default HeroPage;
