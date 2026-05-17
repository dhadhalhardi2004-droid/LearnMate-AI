import fs from 'fs/promises';
import { PDFDocument } from 'pdf-lib';

export const extractTextFromPDF = async (filePath) => {
  try {
    const dataBuffer = await fs.readFile(filePath);
    const parser= new PDFDocument(new Uint8Array(dataBuffer));
    const data = await parser.getText();
    return {
        text:data.text,
    numPages:data.numPages,
info:data.info
   };
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw new error("Error extracting text from PDF");
  }
};