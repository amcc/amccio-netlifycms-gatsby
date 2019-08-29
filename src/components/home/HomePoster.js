import React from "react";

import { Box } from "rebass";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const HomeBoxContainer = css`
  min-height: 100vh;
`;
const HomeBox = css`
  transition: all 0.5s ease;
  margin: 0 auto;
  /* border: 5px dashed green; */
  /* padding-left: 3vw; */
  /* margin-top: 10vh; */
  h2 {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    @media screen and (min-width: 320px) {
      font-size: calc(20px + 23 * ((100vw - 320px) / 680));
      line-height: calc(18px + 13 * ((100vw - 320px) / 680));
    }
    @media screen and (min-width: 1000px) {
      font-size: 43px;
      line-height: 31px;
    }
  }

  /* fluid font sizes */

  h1 {
    /* background: tomato; */
    grid-area: strap;
    margin: 0;
    padding: 0;
    font-weight: normal;
    margin-top: auto;
    font-size: 20px;
    @media screen and (min-width: 320px) {
      font-size: calc(20px + 42 * ((100vw - 320px) / 680));
    }
    @media screen and (min-width: 1000px) {
      font-size: 62px;
    }
    padding-left: 15px;
  }

  .development {
    /* background: orange; */
    grid-area: development;
    transform: rotate(-90deg);
    text-align: right;
    text-transform: uppercase;
    span {
      position: relative;
      right: 5px;
    }
  }
  .design {
    /* background: lime; */
    grid-area: design;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 300;
    /* grid-column: 1 / -1; */
  }
  .box {
    background: lightgray;
    grid-area: boxy;
  }
  .line {
    background: red;
    grid-area: line;
  }
`;

const HomePoster = ({ image, title, subheading }) => {
  return (
    <Box 
    sx={{
      paddingTop: ["10vw","5vw","8vw"],
      paddingLeft: ["15vw","7vw","10vw"],
      overflowX: ["hidden","visible","visible"],
      overflowY: ["visible","visible","visible"],
    }}
    css={HomeBoxContainer}>
      <Box
        sx={{
          display: "grid",
          paddingTop: ["10vw","0","0"],
          // gridGap: 4,
          width: ["82vw","72vw","62vw"],
          gridGap: ["8px","4px","4px"],
          gridTemplateColumns: ["40vw 40vw","35vw 35vw","30vw 30vw"],
          gridTemplateRows: ["5.2vw 40vw 2vw 40vw","5.2vw 35vw 2vw 35vw","5.2vw 30vw 2vw 30vw"],
          gridTemplateAreas: [
            `
                            "design . "
                            "boxy strap"
                            "line line"
                            "development . "
                            `
          ],
          transform: ["rotate(17deg)", "rotate(20deg)", "rotate(23deg)"],
          transformOrigin: "50% 50%",
        }}
        css={HomeBox}
      >
        <h1 className="strap">
          the <br />
          work <br /> & thoughts <br /> of amcc
        </h1>
        <h2 className="development"><span>development</span></h2>
        <h2 className="design">
          <span>&</span>
          <span>design</span>
        </h2>
        <Box className="box"></Box>
        <div className="line"></div>
      </Box>
    </Box>
    // <div
    //   className="full-width-image margin-top-0"
    //   style={{
    //     backgroundImage: `url(${
    //       !!image.childImageSharp ? image.childImageSharp.fluid.src : image
    //     })`,
    //     backgroundPosition: `top left`,
    //     backgroundAttachment: `fixed`,
    //   }}
    // >
    //   <div
    //     style={{
    //       display: 'flex',
    //       height: '150px',
    //       lineHeight: '1',
    //       justifyContent: 'space-around',
    //       alignItems: 'left',
    //       flexDirection: 'column',
    //     }}
    //   >
    //     <h1
    //       className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
    //       style={{
    //         boxShadow:
    //           '#FF1493 0.5rem 0px 0px, #FF1493 -0.5rem 0px 0px',
    //         backgroundColor: '#FF1493',
    //         color: 'white',
    //         lineHeight: '1',
    //         padding: '0.25em',
    //       }}
    //     >
    //       {title}
    //     </h1>
    //     <h3
    //       className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
    //       style={{
    //         boxShadow:
    //           '#FF1493 0.5rem 0px 0px, #FF1493 -0.5rem 0px 0px',
    //         backgroundColor: '#FF1493',
    //         color: 'white',
    //         lineHeight: '1',
    //         padding: '0.25em',
    //       }}
    //     >
    //       {subheading}
    //     </h3>
    //   </div>
    // </div>
  );
};

export default HomePoster;
