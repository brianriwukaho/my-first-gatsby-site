import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)
    .slice(0, 3);

  return (
    <Layout pageTitle="Hey, I'm Brian!">
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <h1>I'm a Software Engineer in Brisbane, QLD, Australia</h1>
      <p>
        I currently work at Flight Centre as a Fullstack Engineer. I am an avid
        video gamer, hobbyist musician and passionate software developer.
      </p>

      <p>This website will serve as a place to:</p>
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
      <ul className="contact-info">
        <li>
          <img src="/assets/contact/twitter.png" className="contact-me-icon" />
          <b>Twitter</b>:{" "}
          <b>
            <a href="/">@briwukaho</a>
          </b>
        </li>
        <li>
          <img src="/assets/contact/linkedin.png" className="contact-me-icon" />
          <b>Linkedin</b>:{" "}
          <b>
            <a href="/">Brian Riwu Kaho</a>
          </b>
        </li>
        <li>
          <img src="/assets/contact/github.png" className="contact-me-icon" />
          <b>Github</b>:{" "}
          <b>
            <a href="/">brianriwukaho</a>
          </b>
        </li>
        <li>
          <img src="/assets/contact/gmail.png" className="contact-me-icon" />
          <b>Email</b>:{" "}
          <b>
            <a href="/">brianriwukaho@gmail.com</a>
          </b>
        </li>
      </ul>

      <h2>Recent posts</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
