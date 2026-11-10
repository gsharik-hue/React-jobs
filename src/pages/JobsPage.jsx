import React, { useState } from 'react';
import jobsData from '../jobs.json';
import JobListings from '../components/JobListings';

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar los trabajos por título, tipo o ubicación
  const filteredJobs = jobsData.jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-blue-50 px-4 py-6">
      <div className="container-xl lg:container m-auto mb-6">
        {/* Input de filtro */}
        <input
          type="text"
          placeholder="Filter jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobListings key={job.id} job={job} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No jobs found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsPage;