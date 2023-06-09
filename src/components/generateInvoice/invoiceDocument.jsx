import React from "react";
import { Page, Document, StyleSheet, Image } from "@react-pdf/renderer";
import InvoiceNo from "../InvoiceNo";
import BillTo from "../Billto"
import InvoiceItemsTable from "../InvoiceItemsTable";
import InvoiceFooter from "../invoiceFooter";
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 84,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

const PdfDocument = ({ invoicedata }) => {
    console.log(invoicedata)
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                <InvoiceNo invoice={invoicedata} />
                <BillTo invoice={invoicedata} />
                <InvoiceItemsTable invoice={invoicedata} />
                <InvoiceFooter invoice={invoicedata}/>
            </Page>
        </Document>
    );
}

export default PdfDocument;