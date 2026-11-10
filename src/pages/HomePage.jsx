import Hero from '../components/Hero';
import Homecards from '../components/Homecards';
import JobListings from '../components/JobListings'; // Ojo: en plural
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListings /> {/* Aquí va el contenedor que carga los trabajos */}
      <ViewAllJobs />
    </>
  );
};

export default HomePage;