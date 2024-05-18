import React, { useState } from 'react';
import JobDetailsModal from './JobDetailsModal';

const JobCard = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="job-card">
      <h3>{job.title || 'No title available'}</h3>
      <p>{job.company?.display_name || 'No company name available'}</p>
      <p>{job.location?.display_name || 'No location available'}</p>
      <p>Keywords: {Array.isArray(job.keywords) ? job.keywords.join(', ') : 'No keywords available'}</p>
      <button onClick={handleViewDetails}>View Details</button>
      <button onClick={() => window.open(job.redirect_url, '_blank')}>Apply</button>
      {isModalOpen && <JobDetailsModal job={job} onClose={handleCloseModal} />}
    </div>
  );
};

export default JobCard;
