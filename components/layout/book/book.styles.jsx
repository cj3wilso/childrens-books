import styled, { createGlobalStyle, css } from "styled-components";

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

export const print = {
  styles: (...args) => css`
    &.print {
      ${css(...args)}
    }
    @media print {
      ${css(...args)};
    }
  `,
};

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    height: 100dvh;
    border: red solid 1px;
  }
  ${print.styles`
    margin: 0;
  `}
`;

export const BookContainer = styled.div`
  aspect-ratio: ${(props) =>
    props.printSize === "a4" ? "1.41429 / 1" : "1.29412 / 1"};
  background: purple;
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    height: calc(100dvh - 50px);
    border: orange solid 2px;
  }
  @media (max-width: 820px) {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 500px) {
    height: 100dvh;
  }
  ${print.styles`
    visibility: visible;
    height: auto;
    aspect-ratio: auto;
    max-width: unset;
    padding: 0;
    margin: 0;
    width: 100vw;
    transform: none;
  `};
`;

export const Page = styled.div`
  display: flex;
  direction: ltr;
  justify-content: flex-end;
  background: white;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  padding-right: ${(props) => (props.show ? "0.25in" : "0")};
  height: ${(props) => (props.show ? "100%" : "0")};
  ${print.styles`
    visibility: visible;
    background: white;
    width: ${(props) => (props.printSize === "a4" ? "11.7in" : "11in")};
    // height: 8.3in 8.5in;
    height: ${(props) => (props.printSize === "a4" ? "8.2501in" : "8.5in")};
    padding-right: 0.25in;
    margin: 0;
    page-break-after: always;
    page-break-inside: avoid;
    &:last-child {
      page-break-after: auto;
    }
  `};
`;

export const SubPage = styled.div`
  display: flex;
  width: 720px;
  height: 540px;
  align-self: center;
  margin: 0;
  background-image: ${(props) =>
    props.background !== "" ? `url("/${props.background}")` : ""};
  background-color: ${(props) =>
    props.backgroundColor !== "" ? props.backgroundColor : ""};
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  padding: 20px;
  @media (max-width: 820px) {
    width: 85.47%;
    height: 90.91%;
    background-size: cover;
    padding: 9px;
  }
  @media (max-width: 500px) {
    padding: 5px;
  }
  ${print.styles`
    width: 10in;
    height: 7.5in;
    background-size: contain;
    padding: 20px;
  `};
`;

export const ContentArea = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 6px;
  align-self: flex-end;
  width: 100%;
  font-size: 16px;
  @media (max-width: 820px) {
    font-size: 12px;
    line-height: 13px;
  }
  ${print.styles`
    font-size: 16px;
    padding: 0.125in;
  `};
`;

export const BookTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: capitalize;
  color: white;
  width: 100%;
  padding: 0 7rem;
  @media (max-width: 820px) {
    font-size: 28px;
    padding: 0 4rem;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    padding: 0 2.5rem;
  }
  ${print.styles`
    font-size: 40px;
    padding: 0 7rem;
  `};
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0 auto;
  z-index: 0;
  @media (max-width: 820px) {
    bottom: -40px;
  }
  ${print.styles`
    bottom: auto;
  `};
  img {
    object-fit: contain;
    width: 500px;
    @media (max-width: 820px) {
      width: 100%;
      height: auto;
    }
    ${print.styles`
      width: 500px;
    `};
  }
`;

export const LayoutButton = styled.div`
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
  ${print.styles`
    display: none;
  `};
`;
