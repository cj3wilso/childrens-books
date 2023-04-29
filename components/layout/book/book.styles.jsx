import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @media print {
    html,body{
        margin:0;
        padding:0;
    }
    @page {
        size: A4 landscape;
        margin: 0;
    }
    * {
        -webkit-box-sizing: border-box !important;
        -moz-box-sizing: border-box !important;
        -ms-box-sizing: border-box !important;
        box-sizing: border-box !important;
    }
    header, footer, aside, nav, form, iframe {
        display: none !important;
    }
    table, img, svg {
        break-inside: avoid;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  @media print {
    margin: 0;
  }
`;

export const BookContainer = styled.div`
  aspect-ratio: 1.41429 / 1;
  background: purple;
  @media print {
    visibility: visible;
    height: auto;
    aspect-ratio: auto;
    max-width: unset;
    padding 0 !important;
    margin: 0 !important;  
  }
`;

export const Page = styled.div`
  background: blue !important;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  padding: ${(props) => (props.show ? "20px" : "0")};
  height: ${(props) => (props.show ? "100%" : "0")};
  @media print {
    visibility: visible;
    display: block !important;
    width: 29.7cm;
    // height: 21cm;
    height: 20.955cm;
    padding: 0.125in;
    margin: 0 !important;
    page-break-after: always;
    &:last-child {
      page-break-after: auto;
    }
  }
`;

export const SubPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.125in;
  margin: 0 !important;
  border: 1px red solid;
  background: yellow !important;
`;
