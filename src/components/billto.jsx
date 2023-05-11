import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    billTo: {
        marginTop: 0,
        marginBottom:10,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },

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
        fontSize: 12
    },
    Heading2: {
        fontSize: 19
    },
    Paragraph: {
        fontSize: 10,
    },
    Paragraph2:{
        fontSize: 10,
        marginRight: 11
    },
    dueDate: {
        flexDirection: "row",
    }
});

const BillTo = ({ invoice }) => (
    <View style={styles.invoiceNoContainer}> 
   <View>
    <Text className="text-center" style={styles.billTo}>Bill To:</Text>
    <Text className="font-sans font-thin text-3xl text-red-200">{invoice.fullname}</Text>
    <Text>{invoice.address}</Text>
    <Text>{invoice.Area}</Text>
    <Text>{invoice.state}</Text>
  </View>
        <View>
        <Text style={styles.Paragraph} >Invoice Date: {invoice.invoiceDate}</Text>  
        <View style={styles.dueDate}>
         <Text style={styles.Paragraph2}>Due Date:</Text>
         <Text>{invoice.dueDate}</Text>
        </View>
         </View>    
    </View>
);
 
export default BillTo;