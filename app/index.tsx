import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider, {SliderProps} from '@react-native-community/slider';
import React, { Component, useEffect, useState } from "react";

import images from "@/constants/images";

export default function Index() {

  //Greeting
  const [greeting, setGreeting] = useState('Hallo');
  const [inputValue, setInputValue] = useState("");
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
      {/* Header */}
      <Text style={styles.title}>Tipper</Text>
      <Text style={styles.greeting}>{greeting}! 👋</Text>

      {/* Input */}
      <SafeAreaView style={styles.container}>
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Gesamtbetrag 💵</Text>
          <View style={styles.textInputLine}>
            <TextInput style={styles.input} placeholder="[Rechnungsbetrag]" maxLength={15} value={inputValue} onChangeText={setInputValue}></TextInput>
            <Text style={styles.euro}>{inputValue === "" ? "" : "€"}</Text>
            <Image source={images.Wallet} style={styles.wallet}/>
          </View>
        </View>
      </SafeAreaView>

      {/* Slider & Output */}
      <SafeAreaView>
        <Image source={images.Credit_Card} style={styles.creditCard}/>
      </SafeAreaView>


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
    marginTop: "25%",
    marginHorizontal: "10%",
    width: "75%",
    height: "160%",
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
    marginTop: "2%",
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
    marginTop: "23%",
    marginVertical: "-13%",
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
    textAlign: "center",
    marginTop: "-13%",
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
  euro: {
    textAlign: "right",
    marginHorizontal: "23%",
    marginTop: "-10%",
    fontSize: 25,
    fontFamily: "MadimiOne-Regular",
    textShadowColor: '#9B9B9B', 
    textShadowOffset:{
      height:3, 
      width: 0
    },
    textShadowRadius: 4,
  },
  creditCard: {
    width: 30,
    height: 20,
    resizeMode: "cover",
  },
  wallet: {
    width: 25,
    height: 25,
    position: "absolute",
    tintColor: "black",
    shadowColor: "#000000",
    shadowOffset:{
        height:1, 
        width: 0
    }, 
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 5, 
    marginHorizontal: "90%",
    marginVertical: "-11%",
    resizeMode: "cover",
  },
})