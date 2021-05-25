import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { StarIcon } from '../../../assets/svg/OtherIcons';



function Problem() {

  const cards = []
  for (let index = 0; index < 10; index++) {
    cards.push(
      <View style={styles.card}>
        <Text style={styles.card__text}>Cant find business ideas and the shhd uduud fuud siis diuid suzus dudu shhs </Text>
        <View style={styles.divider}></View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginTop:10,marginBottom:10, paddingLeft:9, paddingRight:9}}>
          <Text style={styles.card__text_left}>1k have </Text>
          <View style={{display:"flex", flexDirection:"row",}} >
            <StarIcon  />
            <Text style={styles.card__text_right__text}>I have </Text>
          </View>
        </View>
      </View>
    )
    
  }

  return (
    <ScrollView
      bounces={false} showsVerticalScrollIndicator={false}>
        {cards}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#FFFFFF",
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  divider: {
    borderColor:"#D3D4D8", 
    borderStyle:"solid", 
    borderWidth:1,
  },
  card__text:{
    fontFamily: "regular",
    fontStyle:"normal",
    fontSize:16,
    lineHeight:20,
    color:"#000000",
    letterSpacing:-0.24,
    marginLeft:9,
    marginTop:10,
    marginBottom:10
  },
  card__text_left:{
    fontFamily: "regular",
    fontStyle:"normal",
    fontWeight:"bold",
    fontSize:13,
    color:"#4D606E",
  }, 
  card__text_right__text:{
    fontFamily: "regular",
    fontStyle:"normal",
    fontWeight:"bold",
    fontSize:13,
    color:"#4D606E",
  },
});


export default connect()(Problem);
