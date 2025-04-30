import { Text, View, StyleSheet, TextInput, Image, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from '@react-native-community/slider';
import React, { Component, useEffect, useState } from "react";

import images from "@/constants/images";

export default function Index() {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }


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

  const [payment, setPayment] = useState(0);
  const [procentual, setProcentual] = useState(10);
  const calculation = Math.round(payment * procentual) / 100;

  if (Number.isNaN(calculation)){
    const calculation = 0;
  }

  //final return
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
        {/* Header */}
        <Text style={styles.title}>Tipper</Text>
        <Text style={styles.greeting}>{greeting}! 👋</Text>

        {/* Input */}
        <View style={styles.inputBox}>
          <Text style={styles.inputHeading}>Gesamtbetrag 💵</Text>
          <TextInput style={styles.input} placeholder="[Rechnungsbetrag]" maxLength={15} keyboardType="numeric" onChangeText={(text) => {const number_text = parseFloat(text); setPayment(number_text)}}></TextInput>
          <View style={styles.textInputLine}/>
        </View>
        {/* Slider & Output */}
        <View style={styles.output}>
          <View style={styles.coverAreaCredit}/>
          <Image source={images.Credit_Card} style={styles.creditCardImage}/>
          <Text style={styles.outputText}>{calculation} €</Text>

          <View style={styles.sliderView}>
            <Slider 
              style={styles.slider}
              minimumValue={0}
              maximumValue={20}
              step={1}
              value={procentual}
              onValueChange={(value) => setProcentual(value)}
              maximumTrackTintColor="#e0090d"
              minimumTrackTintColor="#0bba1a"
            />
            <View style={{justifyContent: "space-between", flexDirection: "row", width: "100%"}}>
              <Text style={{color: "white"}}>0%</Text>
              <Text style={{color: "#fcba03", fontSize: 18}}>{procentual}%</Text>
              <Text style={{color: "white"}}>20%</Text>
            </View>
          </View>
        </View>

        </View>
      </TouchableWithoutFeedback>
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
  },
  creditCard: {
    height: 10,
  
  },
  output: {
    marginTop: 30,
    paddingHorizontal: 45,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  creditCardImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    borderRadius: 20,
  },
  coverAreaCredit: {
    backgroundColor: "#5464FF",
    position: "absolute",
    width: 290,
    height: 110,
    left: 50,
    top: 100,
    zIndex: 2,
  },
  outputText:{
    position: "absolute",
    zIndex: 2,
    fontSize: 40,
    color: "white",
    bottom: 153,
    fontFamily: "MadimiOne-Regular"
  },
  sliderView: {
    position: "absolute",
    zIndex: 2,
    top: 140,
    width: 250,
  },
  slider: {
    width: 250,
    height: 40,
  },
})