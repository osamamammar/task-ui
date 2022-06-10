import { createGlobalStyle } from "styled-components";
import { ApercuBold, ApercuMedium, ApercuRegular } from "./assets/fonts";

const GlobalStyles = createGlobalStyle`
:root{
  --background-color-100:#3d3d49;
  --background-color-200:#32323e;
  --background-color-300: #272730;
  --font-color-100: #ffffff;
  --font-color-200:#8b8a9d;
  --gray-color:#575761;
  --green-color:#0bc189;
  --red-color:#fb4e78;
  --btn-color:#3f5af7;
  --font-size-xl:20px;
  --font-size-lg:16px;
  --font-size-md:14px;
  --font-size-sm:13px;
  --font-size-xs:12px;
}

@font-face {
    font-family: 'Apercu';
    src: url(${ApercuBold}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Apercu';
    src: url(${ApercuRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Apercu';
    src: url(${ApercuMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}


html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul, label {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Apercu", sans-serif;
  line-height: 1.7;
  word-break: break-word;
}

body{
  background-color: var(--background-color-300);
}

ol, ul {
  list-style: none;
}

a{
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}


.visually-hidden:not(:focus):not(:active) {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
`;

export default GlobalStyles;
