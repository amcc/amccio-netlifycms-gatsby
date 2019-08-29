import React from "react";

import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const MaxWidth = `1200px`;
export const GlobalStyle = props => {
  // console.log(NBInternationalBoldEOT);
  return (
    <Global
      {...props}
      styles={css`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          /* the above makes scrolling screw up on iphone */
          /* -webkit-overflow-scrolling: touch; */
          height: 100%;
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
        }

        body {
          margin: 0;
        }
      `}
    />
  );
};

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MaxWidth};

  @media (min-width: 40em) {
    /* padding: 0px 1.0875rem 1.45rem; */
    padding: 0px 10px;
    font-size: 100%;
  }
`;
