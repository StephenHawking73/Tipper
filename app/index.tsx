import { Text, View, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider, {SliderProps} from '@react-native-community/slider';
import React, { Component, useEffect, useState } from "react";

import images from "@/constants/images";

export default function Index() {

  //Greeting
  const [greeting, setGreeting] = useState('Hallo');
  useEffect(() => {
    const getCurrentGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        return 'Guten Morgen';
      } else if (hour < 18) {
        return 'Guten Tag';
      } else{
        return 'Guten Abend';
      }
    }
    setGreeting(getCurrentGreeting());
  }, [])

  //final return
  return (
    <SafeAreaView>
      <ScrollView style={{height: 1000}}>
        {/* Header */}
        <Text style={styles.title}>Tipper</Text>
        <Text style={styles.greeting}>{greeting}! 👋</Text>

        {/* Input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Gesamtbetrag 💵</Text>
          <TextInput style={styles.input} placeholder="[Rechnungsbetrag]" maxLength={15}></TextInput>
          <View style={styles.textInputLine}/>
        </View>
      </ScrollView>

      {/* Slider & Output */}



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,  // Ensure SafeAreaView takes up space
    alignItems: 'center', // Center content
    justifyContent: 'center', // Center content
    display: 'flex', // Ensure it's visible on Web
  },
  title: {
    marginTop: 30,
    marginLeft: 45,
    fontSize: 64,
    fontFamily: "MadimiOne-Regular",
    textShadowColor: '#9B9B9B', //use Hex-Code instead
    textShadowOffset:{
      height:7, 
      width: 0
    },
    textShadowRadius: 4,
  },
  greeting: {
    marginTop: 10,
    marginLeft: 45,
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  },
  inputBox: {
    marginHorizontal: 45,
    marginTop: 50,
    height: 180,
    width: "77%",
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    shadowColor: "#000000",
    shadowOffset:{
        height:5, 
        width: 0
    }, 
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 5, 
  },
  inputHeading: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 30,
    fontFamily: "MadimiOne-Regular",
    textShadowColor: '#9B9B9B', 
    textShadowOffset:{
      height:5, 
      width: 0
    },
    textShadowRadius: 4,
  },
  textInputLine: {
    marginHorizontal: "10%",
    marginTop: 10,
    width: "80%",
    height: 2,
    backgroundColor: "#000000",
    shadowColor: "#000000",
    shadowOffset:{
        height:5, 
        width: 0
    }, 
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 5, 
  },
  input: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "MadimiOne-Regular",
    fontStyle: "italic",
    textShadowColor: '#9B9B9B', 
    textShadowOffset:{
      height:3, 
      width: 0
    },
    textShadowRadius: 4,
  },
  creditCard: {
    height: 10,
  
  }
})