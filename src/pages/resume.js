// Step 1: Import your component
import * as React from "react";
import Experience from "../components/experience";
import Layout from "../components/layout";

// Step 2: Define your component
const ResumePage = () => {
  return (
    <Layout pageTitle="Experience">
      <Experience
        title="Compare the Market"
        location="Brisbane, Australia"
        role="Software Engineer"
        time="May, 2020 - Present"
      >
        <ul className="experience-info">
          <li>
            Developing Micro-services with Java 11+ Springboot and React + Hooks
            + Redux. Managed environments and deployments using Ansible with
            Docker and Native Kubernetes with Bamboo CI/CD pipeline
          </li>
          <li>
            Writing Functions as a service using Golang or NodeJs + Typescript
            or Java + GraalVM
          </li>
          <li>
            Using a micro-frontend way of working to build CTM's different
            verticals
          </li>
          <li>
            100 percent unit-test coverage on Front-End (Jest) when developing
            new micro-frontend microservices
          </li>
          <li>
            Often worked with Monolith Legacy Java EE + JSP + Spring
            application, adding tests and avoiding legacy anti-patterns whenever
            possible
          </li>
        </ul>
      </Experience>
    </Layout>
  );
};

// Step 3: Export your component
export default ResumePage;
