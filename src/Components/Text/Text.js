import React from 'react';

const Text = ({ children, variant, className }) => {
  let fontSize;

  switch (variant) {
    case 'xs':
      fontSize = '12px';
      break;
    case 'sm':
      fontSize = '14px';
      break;
    case 'md':
      fontSize = '16px';
      break;
    case 'lg':
      fontSize = '18px';
      break;
    case 'xl':
      fontSize = '20px';
      break;
    case '2xl':
      fontSize = '24px';
      break;
    default:
      fontSize = '16px';
  }

  const mediaQueries = {
    xs: `@media (max-width: 480px) { font-size: ${fontSize}; }`,
    sm: `@media (min-width: 481px) and (max-width: 768px) { font-size: ${fontSize}; }`,
    md: `@media (min-width: 769px) and (max-width: 1024px) { font-size: ${fontSize}; }`,
    lg: `@media (min-width: 1025px) and (max-width: 1200px) { font-size: ${fontSize}; }`,
    xl: `@media (min-width: 1201px) and (max-width: 1440px) { font-size: ${fontSize}; }`,
    '2xl': `@media (min-width: 1441px) { font-size: ${fontSize}; }`,
  };

  return (
    <span className={className} style={{ fontSize }}>
      <style>{mediaQueries[variant]}</style>
      {children}
    </span>
  );
};

export default Text;