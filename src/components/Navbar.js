import React from "react";
import { Link } from "gatsby";
import { Box, Flex } from "rebass";

const Navbar = () => {
  return (
    <nav>
      <Box
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: ["1fr 2fr","2fr 2fr","3fr 1fr"]
        }}
      >
        <Box>
          <Link to="/" className="navbar-item" title="Logo">
            <strong style={{ color: "#FF1493" }}>amcc.io</strong>
          </Link>
        </Box>
        <Flex justifyContent="space-between">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
