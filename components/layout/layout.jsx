import { Architects_Daughter } from "next/font/google";

import {
  Main,
  Description,
  Kids,
  Logo,
  Books,
} from "./layout.styles";

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
});

function Layout(props) {
  return (
    <Main className={architectsDaughter.className}>
      <Description>
        <a href="/" rel="noopener noreferrer">
          <Logo>
            <Kids>
              <span>K</span>
              <span>i</span>
              <span>d</span>
              <span>s</span>
            </Kids>
            <Books>Tales!</Books>
          </Logo>
        </a>
        <p>
          Get started by editing&nbsp;
          <code>pages/index.tsx</code>
        </p>
      </Description>
      {props.children}
    </Main>
  );
}

export default Layout;
