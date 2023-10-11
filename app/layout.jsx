import React from "react";
import PropTypes from 'prop-types';

export const metadata = {
  title: 'Hasnat Portfolio',
  description: 'Hasnat portfolio. A highly skilled fullstack developer',
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
