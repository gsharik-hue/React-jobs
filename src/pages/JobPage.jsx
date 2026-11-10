import React from 'react';
import { useParams, Link } from 'react-router-dom';
import jobsData from '../jobs.json';

const JobPage = () => {
  const { id } = useParams();
  const job = jobsData.jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <div className="text-center py-10 text-2xl font-bold">
        Job Not Found
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            ← Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main className="col-span-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-orange-700 mb-4 flex justify-center md:justify-start items-center">
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            <aside className="col-span-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company?.name}</h2>
                <p className="my-2">{job.company?.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold break-words">
                  {job.company?.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company?.contactPhone}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;