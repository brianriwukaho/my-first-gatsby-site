// Step 1: Import your component
import * as React from "react";
import Experience from "../components/experience";
import Layout from "../components/layout";

// Step 2: Define your component
const ResumePage = () => {
  return (
    <Layout pageTitle="Experience">
      <Experience
        company="Flight Centre"
        location="Brisbane, Australia"
        role="Fullstack Software Developer"
        time="March 2021 - Present"
      ></Experience>
      <Experience
        company="Compare the Market"
        location="Brisbane, Australia"
        role="Software Engineer"
        time="May 2020 - March 2021"
      >
        <ul className="experience-info">
          <li>
            Developed <a>micro-services</a> with <a>Java Spring</a> and
            functional <a>React</a> + <a>Redux</a>.
          </li>
          <li>
            {" "}
            Managed environments and deployments using <a>Ansible</a> with{" "}
            <a>Docker</a> and <a>Kubernetes</a> with <a>Bamboo</a> CI/CD
            pipeline
          </li>
          <li>
            Used <a>event-driven</a> backend architecture in <a>AWS</a> using{" "}
            <a>Golang</a> or <a>NodeJs</a> + <a>NodeJs</a> or <a>Java</a> +{" "}
            <a>GraalVM</a>
          </li>
          <li>
            Used <a>micro-frontend</a> architecture to build out websites for
            different verticals
          </li>
          <li>
            100 percent unit-test coverage on Front-End (<a>Jest</a> +{" "}
            <a>React Testing Library</a> + <a>Cypress</a>) when developing{" "}
            <a>micro-frontend</a> <a>micro-services</a>
          </li>
          <li>
            Often worked with monolith Legacy <a>Java EE</a> + <a>JSP</a> +{" "}
            <a>Spring</a> application, adding tests and avoiding legacy
            anti-patterns whenever possible
          </li>
        </ul>
      </Experience>
      <Experience
        company="University of Queensland"
        location="Brisbane, Australia"
        role="Fullstack Software Developer"
        time="Sep. 2019 - April 2020"
      ></Experience>
      <Experience
        company="National Transport Insurance"
        location="Brisbane, Australia"
        role="Fullstack Software Developer"
        time="Sep. 2019 - April 2020"
      ></Experience>
      <Experience
        company="WorkingMouse (Codebots)"
        location="Brisbane, Australia"
        role="Test Automation Engineer"
        time="June 2019 - Sep. 2020"
      ></Experience>
      <Experience
        company="RogueTwo (Codebots)"
        location="Brisbane, Australia"
        role="Software Developer"
        time="Feb. 2019 - Aug 2020"
      ></Experience>
      <Experience
        company="TalentVine"
        location="Brisbane, Australia"
        role="Software Developer"
        time="Oct. 2018 - Apr 2019"
      ></Experience>
      <h3>
        How did I work at the University of Queensland and NTI at the same time?
      </h3>
      <p>
        I contracted hours on the weekend for UQ while working full-time at NTI
      </p>
      <h3>How did I work at TalentVine and RogueTwo at the same time?</h3>
      <p>I worked part-time at both and had 2 + 3 day split</p>
    </Layout>
  );
};

// Step 3: Export your component
export default ResumePage;
