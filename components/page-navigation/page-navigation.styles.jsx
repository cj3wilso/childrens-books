import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  show
  @media print {
    display: none;
  }
`;

const PrevNext = styled.span`
  background-color: #70b4b8;
  padding: 4px 18px 5px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #5f9fa3;
  }
`;

export const Previous = styled(PrevNext)`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;
export const Next = styled(PrevNext)`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const MXAuto = styled.span`
  margin-left: auto!important;
  margin-right: auto!important;
`;

export const NavigationItem = styled.span`
  display: inline-block;
  padding: 0;
  margin: 0 6px 10px;
  text-align: center;
  width: 20px;
  border-bottom: ${(props) => (props.activeClass === "active" ? "2px solid #5b1647" : "0")};
  cursor: ${(props) => (props.activeClass === "active" ? "default" : "pointer")};
  font-weight: ${(props) => (props.activeClass === "active" ? "700" : "normal")};
`;

