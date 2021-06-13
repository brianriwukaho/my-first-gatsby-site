import React from "react";

const Experience = ({
  children,
  company,
  location,
  role,
  time,
  companyWebsite,
}) => {
  return (
    <div className="experience">
      <div className="experience-info-container">
        <span className="experience-titles-container">
          <a href={companyWebsite} className="company">
            {company}
          </a>
          <p className="location">{location}</p>
        </span>
        <span className="experience-titles-container">
          <p className="role">{role}</p>
          <p className="time">{time}</p>
        </span>
      </div>
      {children}
    </div>
  );
};

export default Experience;
