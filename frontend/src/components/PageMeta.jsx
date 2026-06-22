import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageMeta = ({ title, description }) => {
  const baseTitle = 'Arambh';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Arambh - Empowering communities through education and women\'s empowerment.'} />
    </Helmet>
  );
};

export default PageMeta;
