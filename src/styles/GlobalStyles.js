import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
-webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    :focus {
      outline: none !important;
    }
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    margin-block-start: inherit;
    margin-block-end: inherit;
    margin-inline-start: inherit;
    margin-inline-end: inherit;
    font-weight: inherit;
    display: inherit;
  }
  
`;

export const media = {
  xs: "@media(max-width: 375px)",
  sm: "@media(max-width: 640px)",
  md: "@media(max-width: 768px)",
  lg: "@media(max-width: 1024px)",
  xl: "@media(max-width: 1280px)",
  xxl: "@media(max-width: 1536px)",
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${(props) => props.p};
`;

export const StyledButton = styled.button`
  font-weight: 600;
  margin-top: 0.5em;
  font-size: 16px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

//? Responsive Breakpoints ?//

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
