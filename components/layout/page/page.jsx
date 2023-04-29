import { Architects_Daughter } from "next/font/google";

import {
  PageContainer,
  Header,
  Main,
  Kids,
  Logo,
  Books,
} from "./page.styles";

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
});

function PageLayout(props) {
  return (
    <PageContainer className={architectsDaughter.className} type={props.type}>
      <Header>
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
      </Header>
      <Main>
      {props.children}
      </Main>
    </PageContainer>
  );
}

export default PageLayout;
