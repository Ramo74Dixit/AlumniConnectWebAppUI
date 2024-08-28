import React from 'react';
import Footer from '../components/Footer';

const Event = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/C4D12AQFNy0CKUCEPiw/article-cover_image-shrink_600_2000/0/1647241811903?e=2147483647&v=beta&t=uTiUn87tp3__thfiWE-XfcnV7MIh4DohoRwOgU-aekY')" }}>
      
      </section>

      {/* Events Section */}
      <section className="py-8 px-4 sm:px-8 md:px-16 lg:px-32">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Event Card: Alumni Award */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Alumni Award</h3>
            <p className="mb-4">Recognizing outstanding achievements of our alumni.</p>
            <p><strong>Date:</strong> September 10, 2024</p>
            <p><strong>Location:</strong> University Hall</p>
          </div>

          {/* Event Card: Research Grant */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Research Grant</h3>
            <p className="mb-4">Awarding funds for groundbreaking research projects.</p>
            <p><strong>Date:</strong> October 5, 2024</p>
            <p><strong>Location:</strong> Research Center</p>
          </div>

          {/* Event Card: Startup Launch */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Startup Launch</h3>
            <p className="mb-4">Showcasing innovative startups by our students.</p>
            <p><strong>Date:</strong> November 1, 2024</p>
            <p><strong>Location:</strong> Innovation Hub</p>
          </div>

          {/* Event Card: Reunion Event */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Reunion Event</h3>
            <p className="mb-4">Bringing together graduates from past years.</p>
            <p><strong>Date:</strong> December 15, 2024</p>
            <p><strong>Location:</strong> Alumni Center</p>
          </div>

          {/* Event Card: Scholarship Fund */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Scholarship Fund</h3>
            <p className="mb-4">Raising funds for deserving students.</p>
            <p><strong>Date:</strong> January 20, 2025</p>
            <p><strong>Location:</strong> Main Auditorium</p>
          </div>

          {/* Event Card: Tech Conference */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tech Conference</h3>
            <p className="mb-4">Join us for discussions on the latest in technology.</p>
            <p><strong>Date:</strong> February 15, 2025</p>
            <p><strong>Location:</strong> Tech Hub Convention Center</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-8 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Events</h2>
        <p className="mb-4">Don't miss out on these exciting opportunities. Register now!</p>
        <a href="/register" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Register Today</a>
      </section>
    </div>
  );
}

export default Event;
