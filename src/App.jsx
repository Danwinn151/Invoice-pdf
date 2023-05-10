import { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import './App.css';
import PdfDocument from './components/generateInvoice/invoiceDocument';
import InvoiceData from './utils/invoiceJsonData';


function App() {


  return (
    <div className="App">
    <PDFViewer width={800} height={500} showToolbar={false}>
      <PdfDocument invoicedata={InvoiceData} />
    </PDFViewer>

    <div className='download-link'>
      <PDFDownloadLink
        document={<PdfDocument invoicedata={InvoiceData} />}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading..." : "Download Invoice"
        }
      </PDFDownloadLink>
    </div>
  </div>
  )
}

export default App
