// Step 1: Import your component
import * as React from "react";
import Experience from "../components/experience";
import Layout from "../components/layout";

// Step 2: Define your component
const ResumePage = () => {
  return (
    <Layout>
      <h2>Experience</h2>
      <Experience
        company="Flight Centre"
        companyWebsite="https://www.flightcentre.com.au/"
        location="Brisbane, Australia"
        role="Fullstack Software Engineer"
        time="March 2021 - Present"
      >
        <ul className="experience-info">
          <li>To be filled out at a later date : )</li>
        </ul>
      </Experience>
      <Experience
        company="Compare the Market"
        companyWebsite="https://www.comparethemarket.com.au/"
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
            Managed environments and deployments using <a>Ansible</a> with{" "}
            <a>Docker</a> and <a>Kubernetes</a> with <a>Bamboo</a> CI/CD
            pipeline
          </li>
          <li>
            Hands on experience with manage AWS infrastructure as a result
            writing many <a>CloudFormation</a> templates
          </li>
          <li>
            Used <a>event-driven</a> backend architecture in <a>AWS</a> using{" "}
            <a>Golang</a> or <a>NodeJs</a> + <a>TypeScript</a> or <a>Java</a> +{" "}
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
        companyWebsite="https://www.uq.edu.au/"
        location="Brisbane, Australia"
        role="Fullstack Software Developer"
        time="Sep. 2019 - April 2020"
      >
        <ul className="experience-info">
          <li>
            Developed scripts, web scrapers and APIs, using <a>AWS Lambda</a>{" "}
            with <a>Python</a> or <a>NodeJs</a> + <a>TypeScript</a> to automate
            various processes usually done with excel spreadsheets or other
            manual means in the Alumni and Graduate office.
          </li>
          <li>A side-hustle I undertook outside of regular working hours</li>
        </ul>
      </Experience>
      <Experience
        company="National Transport Insurance"
        location="Brisbane, Australia"
        role="Fullstack Software Developer"
        time="Sep. 2019 - April 2020"
      >
        <ul className="experience-info">
          <li>
            Developed <a>micro-services</a> with <a>Java 11</a> +{" "}
            <a>Springboot</a> and <a>Angular 8</a> + <a>NgRx</a> + <a>RxJS</a>.
            Managed environments and deployments using <a>Docker</a> and{" "}
            <a>Kubernetes</a> + <a>OpenShift</a> with <a>Jenkins</a> CI/CD
            pipeline
          </li>
          <li>
            Migrated applications from <a>Angular 8</a> to <a>Angular 9</a>{" "}
            shortly after release to take advantage of the benefits of using the
            new Ivy compiler: Reduced application size by at least 10 percent,
            improved test-speeds by 250 percent
          </li>
          <li>
            100 percent unit-test coverage on Front-End (<a>Jest</a>) and
            Back-End (<a>Junit</a>) when developing <a>Micro-services</a>
          </li>
          <li>
            Convinced company to migrate from <a>Jasmine</a> to <a>Jest</a> as
            Front-End unit-test framework. Migrated application with 250 tests
            with the following outcomes: improved test-speeds by 400 percent,
            improved error reporting and general test writing ability of all
            developers.
          </li>
          <li>
            Often worked with <a>Monolith</a> Legacy <a>Java EE</a> + <a>JSF</a>
            application, adding tests and avoiding legacy anti-patterns whenever
            possible
          </li>
        </ul>
      </Experience>
      <Experience
        company="WorkingMouse (Codebots)"
        companyWebsite="https://workingmouse.com.au/"
        location="Brisbane, Australia"
        role="Test Automation Engineer"
        time="June 2019 - Sep. 2019"
      >
        <ul className="experience-info">
          <li>
            Designer and developer for <a>C#</a> + <a>Asp.net</a> + <a>React</a>{" "}
            and <a>Java 11</a> + <a>Springboot</a> + <a>Springboot</a> automated{" "}
            <a>Springboot</a> test framework.
          </li>
          <li>
            Worked on <a>C#</a> + <a>Asp.net</a> and <a>Java 11</a> +{" "}
            <a>Springboot</a> code generation tool. The core technology used by
            Codebots.
          </li>
        </ul>
      </Experience>
      <Experience
        company="RogueTwo (Codebots)"
        companyWebsite="https://codebots.com/"
        location="Brisbane, Australia"
        role="Software Developer"
        time="Feb. 2019 - May 2019"
      >
        <ul className="experience-info">
          <li>
            Supported and improved legacy apps developed with a <a>LAMP</a> +{" "}
            <a>BackboneJs</a> + <a>Marionette</a> stack.
          </li>
          <li>
            Wrote <a>Bash</a> scripts to automate a various processes involved
            with setting up applications on a Virtual Machine.
          </li>
        </ul>
      </Experience>
      <Experience
        company="TalentVine"
        location="Brisbane, Australia"
        role="Software Developer"
        time="Oct. 2018 - Apr 2019"
      >
        <ul className="experience-info">
          <li>
            Full-Stack developer on recruitment marketplace platform using a
            <a>Python</a> + <a>Flask</a> + <a>SQLAlchemy</a> and{" "}
            <a>AngularJS</a> stack
          </li>
          <li>
            Increased admin panel load time by 1000 percent through optimisation
            of <a>SQL</a> queries and database schemas.
          </li>
        </ul>
      </Experience>
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
