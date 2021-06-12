import React from "react";

const Experience = ({ children, title, location, role, time }) => {
  return (
    <div className="experience">
      <div className="experience-info-container">
        <div className="experience-titles-container">
          <span className="job-title">{title}</span>
          <span className="location">{location}</span>
        </div>
        <div className="experience-titles-container">
          <span className="role">{role}</span>
          <span className="time">{time}</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Experience;
