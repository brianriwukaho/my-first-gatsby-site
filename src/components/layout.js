import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navOwnerName,
  headerContent,
  header,
  ownerInfoContainer,
  professionSpan,
  contentSection,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
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
      <main className={container}>
        <section className={contentSection}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
