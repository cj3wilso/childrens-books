import { lazy, useState } from "react";
const PageNavigation = lazy(() =>
  import("../../page-navigation/page-navigation")
);

import BookData from "../../../data/book.json";

import {
  GlobalStyle,
  Container,
  BookContainer,
  Page,
  SubPage,
} from "./book.styles";

function Book() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <GlobalStyle />
      <Container>
        <BookContainer>
          <Page show={currentPage === 1 ? true : false}>
            <SubPage>
              {BookData.title} {BookData.subtitle} {BookData.character}
            </SubPage>
          </Page>
          {BookData.pages.map((item, index) => {
            return (
              <Page key={index} show={currentPage === index + 2 ? true : false}>
                <SubPage>
                  {item.animal} {item.environment} {item.copy}
                </SubPage>
              </Page>
            );
          })}
        </BookContainer>
        <PageNavigation
          pages={BookData.pages.length + 1}
          showPagination={true}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
}

export default Book;
