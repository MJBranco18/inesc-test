import React from 'react';
import Header from '../components/Header';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-8">
        {/* Add your project cards here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Project Name</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper.
            </p>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">Tag 1</span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm">Tag 2</span>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
