import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        marginRight: 10,
        justifyContent: "space-between"
    },
    invoiceDateContainer: {
        flexDirection: 'col',
        justifyContent: 'flex-end'
    },
    invDue: {
       flexDirection: "row",
    },
    invoiceCustomer: {
      fontSize: 12,
      fontStyle: "bold"
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60
    },
    Heading: {
        fontSize: 21
    },
    Heading2: {
        fontSize: 14,
        marginLeft: 10,
    },
    Paragraph: {
        fontSize: 10,
    }
});

const InvoiceNo = ({ invoice }) => (
    <Fragment>
        <View style={styles.invoiceNoContainer}>
         <View>
         <Text style={styles.label}>Odalo PLC,</Text>
        <Text style={styles.invoiceDate}>Lekki, Lagos</Text>
        <Text style={styles.invoiceDate}>Nigeria</Text>
        </View>

        <View>
          <Text style={styles.Heading}>Invoice</Text>
          <Text style={styles.Heading2}>INV-001</Text>
          <Text style={styles.Paragraph}>Balance due</Text>
          <Text style={styles.Paragraph}>NGN 4,000</Text>          
        </View>
        </View>        
       
    </Fragment>
);

export default InvoiceNo;