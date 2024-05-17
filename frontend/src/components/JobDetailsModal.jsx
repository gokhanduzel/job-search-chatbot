import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Requirements:</strong> {job.requirements.join(', ')}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
