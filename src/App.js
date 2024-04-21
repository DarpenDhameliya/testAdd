import './App.css';
import { theme } from './component/commonLink/theme'
import { ThemeProvider } from "@material-ui/styles";
import Index from './component/Index';
import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactToPdf from 'react-to-pdf';
import Dashbord from './component/pages/dashbord/Dashbord';

function App() {
  // const generatePDF = () => {
  //   const input = document.getElementById('pdf-content'); // The HTML element you want to convert to PDF
  //   html2canvas(input).then((canvas) => {
  //     const pdf = new jsPDF(); // 'p' for portrait mode, 'mm' for millimeters, 'a4' for A4 size
  //     const imgData = canvas.toDataURL('image/png');
  //     const imgWidth = 210; // Width of A4 page in millimeters
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     pdf.addImage(imgData);
  //     pdf.save('example.pdf');
  //   });

  // };
  // const pdfRef = useRef();
  // const pdfOptions = {
  //   scale: 0.75, // Adjust the scale to fit the A4 page size
  //   pageWidth: '210mm',
  //   pageHeight: '297mm',
  // };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Index />
      </ThemeProvider>

    </>
  );
}

export default App;
