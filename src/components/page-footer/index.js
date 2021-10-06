import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        <a href={githubUrl}>{author} | Creative Technologist</a> © {new Date().getFullYear()}
      </p>
    </footer>
  </>
);

export default PageFooter;
