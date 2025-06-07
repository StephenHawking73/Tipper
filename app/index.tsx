import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider, { SliderProps } from "@react-native-community/slider";
import Checkbox from 'expo-checkbox';
import React, { Component, useEffect, useState } from "react";

import images from "@/constants/images";

const borderColor = "gold";

export default function Index() {
  //Greeting
  const [greeting, setGreeting] = useState("Hallo");
  useEffect(() => {
    const getCurrentGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        return "Guten Morgen";
      } else if (hour < 18) {
        return "Guten Tag";
      } else {
        return "Guten Abend";
      }
    };
    setGreeting(getCurrentGreeting());
  }, []);

  const [sliderValue, setSliderValue] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const [totalTip, setTotalTip] = useState("0.00");
  const [totalRoundedTip, setTotalRoundedTip] = useState("0.00");
  const [totalRoundedMoney, setTotalRoundedMoney] = useState("0.00");
  const [round, setDoRound] = useState(false);
  const [roundUp, setDoRoundUp] = useState(false);
  
  const input = Number(inputValue);
  const tip = (input * sliderValue / 100) || 0;
  const roundedTip = Math.round(input * sliderValue  / 100) || 0;
  const roundedTipPercentage = (input != 0) ? ((roundedTip / input)*100).toFixed(2) : sliderValue 
  const totalMoney = round ? (input + roundedTip).toFixed(2) : (input + tip).toFixed(2)

  useEffect(() => {
    setTotalTip(tip.toFixed(2));
    setTotalRoundedTip(roundedTip.toFixed(2))
    setTotalRoundedMoney((input + roundedTip).toFixed(2));
  }, [inputValue, sliderValue]);

  //final return
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>

        {/* Heading */}
        <View style={styles.container}>
          <Text style={styles.title}>Tipper</Text>
          <Text style={styles.smallText}>{greeting}! 👋</Text>
        </View>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.betragInput}
            placeholder="Betrag"
            keyboardType="numeric"
            maxLength={10}
            value={inputValue}
            onChangeText={(text)=>setInputValue(text.replace(/,/g, "."))}
          />
          <Text style={styles.currency}>€</Text>
        </View>

        {/* Slider */}
        <View style={styles.container}> 
          <Slider
            style={{ width: "80%", height: 40 }}
            minimumValue={0}
            maximumValue={15}
            onValueChange={setSliderValue}
            step={1}
            value={sliderValue}
          />
          <Text style={styles.smallText}>
            {sliderValue}% | {totalTip}€    <Text style={{color: borderColor}}>{roundedTipPercentage}% | {totalRoundedTip}€</Text>
          </Text>
          
        </View>

        {/* Output Total */}
        <View style={[styles.container, {paddingTop: 10}]}>
          <Text style={[styles.bigText, styles.border, { borderColor: round ? borderColor : "black" }]}>{totalMoney}€</Text>
        </View>


        {/* Checkboxes */}
        <View style={[styles.container, {paddingTop: 30, flexDirection: "row"}]}>
          <View style={styles.checkboxContainer}>
            <Checkbox style={[styles.checkbox]}
                    value={round}
                    onValueChange={setDoRound}
                    color={round ? '#34ebcc' : undefined}
            />
            <Text style={styles.smallText}>Runden</Text>
          </View>
          
          
          
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex", // Ensure it's visible on Web
  },
  checkboxContainer: {
    marginRight: "5%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex", // Ensure it's visible on Web
  },
  title: {
    marginTop: 10,
    fontSize: 64,
    fontFamily: "MadimiOne-Regular",
    textShadowColor: "#9B9B9B", //use Hex-Code instead
    textShadowOffset: {
      height: 7,
      width: 0,
    },
    textShadowRadius: 4,
  },
  inputContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
    width: "80%",
    height: 80,
  },
  betragInput: {
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    fontSize: 30,
    fontFamily: "MadimiOne-Regular",
    paddingLeft: 32, // space for the currency symbol
    marginBottom: 20,
  },
  currency: {
    position: "absolute",
    left: 10,
    top: 10,
    fontFamily: "MadimiOne-Regular",
    fontSize: 30,
    color: "#888",
  },
  checkbox: {
    width: 120,
    height: 120
  },
  
  smallText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  },
  normalText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 50,
  },
  bigText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 80,
  },
  border: {
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 3,
    
  },
  
});
