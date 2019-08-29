import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";

import { GlobalStyle, MainWrapper } from "../utils/styles";
// import { withPrefix } from "gatsby"

//theming from Rebass
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import { Box } from 'rebass'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        {/* <meta name="description" content={description} />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} /> */}
      </Helmet>
      <MainWrapper>
        <Box
          sx={{
            display: "grid",
            gridGap: 4,
            // gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))"
          }}
        >
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Box>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
