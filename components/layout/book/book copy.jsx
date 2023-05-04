import "./styles.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { renderToStaticMarkup } from "react-dom/server";

// Fake bookData object
const bookData = {
  pages: [
    {
      animal: "dog",
      environment: "home",
      copy: "This is a dog"
    }
  ]
};

// React component that is rendered to string for each page
const BookPDF = ({ pageIndex }: { pageIndex: number }) => {
  const item = bookData.pages[pageIndex];

  return (
    <div className="pdf">
      <div className="pdf">
        {item.animal} {item.environment} {item.copy}
      </div>
    </div>
  );
};

// function that is called on click of button
const downloadPDF = async () => {
  const pdfDoc = new jsPDF({
    orientation: "landscape",
    format: "a4",
    unit: "in"
  });

  const totalPages = bookData.pages.length; // get total number of pages

  for (let i = 0; i < totalPages; i++) {
    const pageContent = renderToStaticMarkup(<BookPDF pageIndex={i} />); // render React to string

    const container = document.createElement("div"); // Create empty div

    container.innerHTML = pageContent; // Add converted React string to container div

    document.body.appendChild(container); // Add the div to the document body so that it can be parsed by html2Canvas (hack)

    const canvas = await html2canvas(container); // convert div content to canvas

    document.body.removeChild(container); // Remove the div from the document body (undoing the hack)

    const imgData = canvas.toDataURL("image/png"); // convert canvas to image data

    pdfDoc.addImage(imgData, "PNG", 0, 0, 11.7, 0, undefined, "SLOW");

    if (i < totalPages) {
      pdfDoc.addPage();
    }
  }

  console.log(pdfDoc);
  pdfDoc.save("book.pdf");
};

export default function App() {
  return (
    <div className="App">
      <h1>PDF generator</h1>
      <h2>Click the button to generate a PDF</h2>
      <button onClick={() => downloadPDF()}>click me</button>
    </div>
  );
}
