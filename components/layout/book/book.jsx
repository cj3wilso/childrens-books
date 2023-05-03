import React, { lazy, useState, useRef } from "react";
// import HTMLFlipBook from "react-pageflip";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PageNavigation = lazy(() =>
  import("../../page-navigation/page-navigation")
);
import BookData from "../../../data/book.json";

const pageDimensions = {
    "a4": {
        "width": "11.7",
        "height": "8.3"
    },
    "letter": {
        "width": "11",
        "height": "8.5"
    }
}

import {
  GlobalStyle,
  Container,
  BookContainer,
  Page,
  SubPage,
  LayoutButton,
} from "./book.styles";

function Book() {
  const pdfRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [printSize, setPrintSize] = useState("a4");

  const viewPrintSize = (size) => {
    setPrintSize(size);
  };

  const downloadPDF = async () => {
    const pdfDoc = new jsPDF({
      orientation: "landscape",
      format: printSize,
      unit: "in",
    });

    const totalPages = pdfRef.current.children.length; // get total number of pages
    for (let i = 1; i <= totalPages; i++) {
      const pageContent = pdfRef.current.children[i - 1]; // get page content element
      const canvas = await html2canvas(pageContent); // convert page content to canvas
      const imgData = canvas.toDataURL("image/png"); // convert canvas to image data
      pdfDoc.addImage(imgData, "PNG", 0, 0, pageDimensions[printSize]["width"], pageDimensions[printSize]["height"], null, "SLOW"); // add image to PDF document
      if (i < totalPages) {
        pdfDoc.addPage(); // add new page for next content
      }
    }

    pdfDoc.save("book.pdf");
  };

  const BookPages = (props) => {
    const { pdfRef, className } = props;
    const refProps = pdfRef !== null ? { ref: pdfRef } : {};
    const divStyle =
      className === "print"
        ? {
            position: "absolute",
            left: "-10000px",
            top: "auto",
          }
        : {};
    return (
      <BookContainer
        className={className}
        style={divStyle}
        printSize={printSize}
        {...refProps}
      >
        <Page
          className={className}
          show={currentPage === 1 ? true : false}
          printSize={printSize}
        >
          <SubPage className={className}>
            {BookData.title} {BookData.subtitle} {BookData.character}
          </SubPage>
        </Page>
        {BookData.pages.map((item, index) => {
          return (
            <Page
              key={index}
              className={className}
              show={currentPage === index + 2 ? true : false}
              printSize={printSize}
            >
              <SubPage className={className}>
                {item.animal} {item.environment} {item.copy}
              </SubPage>
            </Page>
          );
        })}
      </BookContainer>
    );
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <BookPages pdfRef={pdfRef} className="print" />
        <BookPages />
        <PageNavigation
          pages={BookData.pages.length + 1}
          showPagination={true}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <LayoutButton onClick={() => viewPrintSize("a4")}>A4</LayoutButton>
        <LayoutButton onClick={() => viewPrintSize("letter")}>
          US Letter
        </LayoutButton>
        <LayoutButton onClick={downloadPDF}>Download PDF</LayoutButton>
      </Container>
    </div>
  );
}

export default Book;
