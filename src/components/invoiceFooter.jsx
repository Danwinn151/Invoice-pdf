import React from 'react'
import {View, Text, StyleSheet} from "@react-pdf/renderer"



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
   textAlign: "right",
   marginTop: 100
  },
  subContainer: {
    flexDirection: "row"
  },
  spaceBetween:{
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  item1: {
    marginRight: 52,
  },
  item2: {
    marginRight: 40,
  },
  subtotal:{
    fontSize: 15,
    fontWeight: "extralight"
  },
  total:{
    fontSize: 15,
    fontWeight: "ultrabold",
  },
  balance:{
    marginTop: 10,
    fontSize: 12,
   backgroundColor: "#999999",
    justifyContent: "flex-end",
    marginLeft: 30
  }
})



const invoiceFooter = ({invoice}) => {
  return (
   <View style={styles.container}>
      <View className="font-extrabold text-5xl">
      <View style={styles.spaceBetween}>
       <View style={styles.item1}>
        <Text style={styles.subtotal}>
         Sub-total:
     </Text>
       </View>
        
        <Text>
         #4000
        </Text>
      </View>
      </View> 

      <View className="font-extrabold text-5xl">
      <View style={styles.spaceBetween}>
       <View style={styles.item2}>
        <Text style={styles.total}>
        Total(NGN):
     </Text>
       </View>
        
        <Text style={styles.total}>
         #4000
        </Text>
      </View>
      </View>  

      <View style={styles.balance}>
      <View style={styles.spaceBetween}>
       <View style={styles.item2}>
         
        <Text style={styles.total}>
        Balance Due:
     </Text>
       </View>
        
        <Text style={styles.total}>
         #4000
        </Text>
      </View>
      </View>

   </View>
   
  )
}

export default invoiceFooter