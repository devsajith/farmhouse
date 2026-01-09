import React, { useState, useEffect } from "react";
import pdf from "../Assets/Arjun Manoj.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Fix: Set workerSrc with backticks correctly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <Document file={pdf} className="d-flex justify-content-center">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
      </Document>
    </div>
  );
}

export default Resume;