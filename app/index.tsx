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
import React, { Component, useEffect, useState } from "react";

import images from "@/constants/images";

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
        <View style={[styles.inputContainer, { marginTop: 50 }]}>
          <TextInput
            style={styles.betragInput}
            placeholder="Betrag"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => setInputValue(text)}
          />
          <Text style={styles.currency}>€</Text>
        </View>

        {/* Slider */}
        <View style={styles.container}> 
          <Slider
            style={{ width: "80%", height: 40 }}
            minimumValue={0}
            maximumValue={15}
            onValueChange={(value) => setSliderValue(value)}
            step={1}
            value={sliderValue}

          />
          <Text style={styles.smallText}>{sliderValue}%</Text>
        </View>

        {/* Output */}
        <View style={[styles.container, {paddingTop: 50}]}>
          <Text style={[styles.bigText,styles.border]}>{((Number(inputValue) * sliderValue / 100).toFixed(2))}€</Text>
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
  inputContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 30,
    fontSize: 64,
    fontFamily: "MadimiOne-Regular",
    textShadowColor: "#9B9B9B", //use Hex-Code instead
    textShadowOffset: {
      height: 7,
      width: 0,
    },
    textShadowRadius: 4,
  },
  smallText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  },
  bigText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 100,
  },
  border: {
    paddingHorizontal: 20,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 3,
    
  },
  creditCard: {
    height: 10,
  },
  betragInput: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    fontSize: 20,
    fontFamily: "MadimiOne-Regular",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  currency: {
    marginLeft: -24,
    marginTop: -20,
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  },
});
