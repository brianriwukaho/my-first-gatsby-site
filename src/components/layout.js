import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navOwnerName,
  headerContent,
  header,
  ownerInfoContainer,
  professionSpan,
} from "./layout.module.css";

export default ({ pageTitle, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div>
      <header className={header}>
        <div className={headerContent}>
          <div className={ownerInfoContainer}>
            <Link to="/" className={navLinkText}>
              <span className={navOwnerName}>Brian Riwu Kaho</span>
              <span className={professionSpan}>Software Engineer</span>
            </Link>
          </div>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/resume" className={navLinkText}>
                  Resume
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/contact" className={navLinkText}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="site-wrapper">
        <h2 className={heading}>{pageTitle}</h2>
        {children}
      </div>
    </div>
  );
};
