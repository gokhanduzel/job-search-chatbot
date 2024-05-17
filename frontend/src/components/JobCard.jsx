import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <button>View Details</button>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
