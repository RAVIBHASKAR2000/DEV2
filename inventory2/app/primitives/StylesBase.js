import React from 'react';
import { Global, css } from '@emotion/core';
import {colors} from '../theme';

export default function StylesBase() {
  return (
    <Global
      styles={css`
        ${normalize};
        $@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
        $@import url('https://fonts.googleapis.com/css?family=Rubik');
        $@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        body {
          max-width: 100%;
          overflow-x: hidden;
          font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
          font-family: 'Poppins', sans-serif;
          line-height: 1.5;
          text-decoration-skip: ink;
          text-rendering: optimizeLegibility;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          -moz-font-feature-settings: 'liga on';
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
        .p-1 {
          padding: 1rem;
        }
        .py-1 {
          padding: 1rem 0;
        }
        .m-0{
          margin: 0;
        }
        .my-0 {
          marginY: 0;
        }
        .mx-0 {
          marginX: 0;
        }
        a {
          text-decoration: none;
          color: black;
        }
        :root {
          --swiper-theme-color: ${colors.theme};
          }

  
          input[type=range] {
            width: 100%;
            margin: 0px 0;
            background-color: transparent;
            -webkit-appearance: none;
          }
          input[type=range]:focus {
            outline: none;
          }
          input[type=range]::-webkit-slider-runnable-track {
            background: rgba(255, 102, 0,0.6);
            border-radius: 1.3px;
            width: 100%;
            height: 4px;
            cursor: pointer;
          }
          input[type=range]::-webkit-slider-thumb {
            margin-top: -6.5px;
            width: 16px;
            height: 16px;
            background: ${colors.theme};
            border-radius: 50%;
            cursor: pointer;
            -webkit-appearance: none;
          }
          input[type=range]:focus::-webkit-slider-runnable-track {
            background: rgba(255, 102, 0,0.6);
          }
          input[type=range]::-moz-range-track {
            background: rgba(255, 102, 0,0.6);
            opacity: 0.6;
            border-radius: 1.3px;
            width: 100%;
            height: 4px;
            cursor: pointer;
          }
          input[type=range]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: ${colors.theme};
            border-radius: 50%;
            cursor: pointer;
          }
          input[type=range]::-ms-track {
            background: transparent;
            border-color: transparent;
            border-width: 14.8px 0;
            color: transparent;
            width: 100%;
            height: 8.4px;
            cursor: pointer;
          }
          input[type=range]::-ms-fill-lower {
            background: #2a6495;
            border-radius: 2.6px;
          }
          input[type=range]::-ms-fill-upper {
            background: #66ff6600;
            border-radius: 2.6px;
          }
          input[type=range]::-ms-thumb {
            width: 16px;
            height: 36px;
            background: #ffcfff;
            border-radius: 3px;
            cursor: pointer;
            margin-top: 0px;
            /*Needed to keep the Edge thumb centred*/
          }
          input[type=range]:focus::-ms-fill-lower {
            background: #3071a9;
          }
          input[type=range]:focus::-ms-fill-upper {
            background: #367ebd;
          }
          /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
          how to remove the virtical space around the range input in IE*/
          @supports (-ms-ime-align:auto) {
            /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
            input[type=range] {
              margin: 0;
              /*Edge starts the margin from the thumb, not the track as other browsers do*/
            }
          }
      `}
    />
  );
}

const normalize = css`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;
