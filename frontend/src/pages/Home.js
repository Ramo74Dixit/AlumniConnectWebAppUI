import React from "react";
import { Link } from "react-router-dom";
import TopAlumlist from "../components/TopAlumlist";
const profiles = [
  {
    image: '/AlumImage.png',
    fullName: 'John Doe',
    title: 'Software Engineer',
    tagline: 'Building scalable web applications',
  },
  {
    image: '/AlumImage.png',
    fullName: 'Jane Smith',
    title: 'Product Manager',
    tagline: 'Leading product teams to success',
  },
  {
    image: '/AlumImage.png',
    fullName: 'Alice Johnson',
    title: 'UX Designer',
    tagline: 'Crafting intuitive user experiences',
  },
];

const HeroPage = () => {
  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full z-10">
      <div className="relative w-full h-[90vh]" onClick={scrollToNextSection}>
        <img
          src="./heroimg.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
          <h1 className="text-yellow-300 text-5xl font-bold">
            Join the Alumni Network Today
          </h1>
          <p className="text-3xl font-serif text-white mt-8">
            Connect with fellow graduates and expand your professional network
          </p>
          <button className="bg-green-500 text-white w-[120px] h-[40px] mt-10 rounded-[3px]">
            <Link to="/home">Get Started</Link>
          </button>
        </div>
      </div>
      <div className="w-[80vw] h-[90vh] mt-8 ml-[10vw]" id="next-section">
        <div className="flex">
          <div className="w-[30vw] h-[40vh] bg-[#CFD0DC] m-3 rounded-3xl flex flex-col relative overflow-hidden">
            <h2 className="text-3xl font-bold ml-6 mt-10">Feature name</h2>
            <p className="mt-2 text-[20px] font-normal ml-6">
              Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
              veniam cupidatat
            </p>
            <Link to="#" className="mt-auto mb-6 underline ml-6">
              Try Now
            </Link>
            <img
              src="/home-div-1.png"
              alt="div-1-image"
              className="absolute bottom-[-70px] right-[-50px] w-[200px] h-[200px] object-contain ml-[40px] mt-auto overflow-hidden"
            />
          </div>

          <div className="w-[60vw] h-[40vh] bg-[#C2EBDCFF] m-3 rounded-lg shadow-md p-4 relative flex items-center">
            <div>
              <h2 className="text-3xl font-bold">Feature name</h2>
              <p className="mt-2 text-[20px] font-normal w-[30vw]">
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
                veniam cupidatat ullamco ulla
              </p>
              <Link to="#" className="underline text-sm mt-2 inline-block">
                Try now
              </Link>
            </div>
            <img
              src="/home-div-2.png"
              alt="div-1-image"
              className="absolute right-4 top-4 w-[280px] h-[280px] object-contain"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-[60vw] h-[40vh] bg-[#C2EBDCFF] m-3 rounded-3xl rounded-lg shadow-md p-4 relative flex items-center">
            <div>
              <h2 className="text-3xl font-bold">Feature name</h2>
              <p className="mt-2 text-[20px] font-normal w-[30vw]">
                Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
                veniam cupidatat ullamco ulla
              </p>
              <Link to="#" className="underline text-sm mt-2 inline-block">
                Try now
              </Link>
            </div>
            <img
              src="/home-div-3.png"
              alt="div-1-image"
              className="absolute right-4 top-4 w-[200px] h-[200px] object-contain"
            />
          </div>
          <div className="w-[30vw] h-[40vh] bg-blue-400 m-3 rounded-3xl flex flex-col relative overflow-hidden">
            <h2 className="text-3xl font-bold ml-6 mt-10">Feature name</h2>
            <p className="mt-2 text-[20px] font-normal ml-6">
              Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad
              veniam cupidatat
            </p>
            <Link to="#" className="mt-auto mb-6 underline ml-6">
              Try Now
            </Link>
            <img
              src="/home-div-4.png"
              alt="div-1-image"
              className="absolute bottom-[-90px] right-[-50px] w-[200px] h-[200px] object-contain ml-[40px] mt-auto overflow-hidden"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-[30vw] space-x-4">
        {profiles.map((profile, index) => (
          <TopAlumlist
            key={index}
            image={profile.image}
            fullName={profile.fullName}
            title={profile.title}
            tagline={profile.tagline}
          />
        ))}
      </div>
      <button className="bg-orange-500 w-[15vw] h-[8vh] rounded-full text-center text-white font-bold text-xl mt-8 ml-[42vw] hover:bg-white border border-4 border-orange-500 hover:text-orange-500">
        <Link to="/alumnidirectory">Explore More</Link>
      </button>
    </div>
  );
};

export default HeroPage;
