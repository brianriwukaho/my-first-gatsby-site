import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="Hi I'm Brian">
      <h1>I'm a Software Engineer in Brisbane, QLD, Australia</h1>
      <p>
        I currently work at Flight Centre as a Fullstack Engineer. I am an avid
        video gamer, hobbyist musician and passionate software developer. In my
        spare time you will often find me playing one of these video games
        (tbd), recording music, or learning more about x framework or y software
        development practice.
      </p>

      <p>This website will server as a place to:</p>
      <ul>
        <li>Showcase what interesting things I have worked on recently</li>
        <li>
          Display my resume for anyone who would like to learn more about me or
          hire me
        </li>
        <li>
          Write informative and educational blog posts about things I am
          passionate about or would like to learn more about
        </li>
      </ul>
      <h1>Recent blog posts</h1>
    </Layout>
  );
};

export default AboutPage;
