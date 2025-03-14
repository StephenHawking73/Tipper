import { Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider, {SliderProps} from '@react-native-community/slider';
import React, { Component, useEffect, useState } from "react";

const { height, width } = Dimensions.get("window");

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
    <SafeAreaView >
      {/* Header */}
      <Text style={styles.title}>Tipper</Text>
      <Text style={styles.greeting}>{greeting}! 👋</Text>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputBox}/>
      </SafeAreaView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensure SafeAreaView takes up space
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
    marginTop: height * 0.1,
    marginHorizontal: 20,
    width: 308,
    height: 160,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    shadowColor: "#00000",
    shadowOffset:{
        height:5, 
        width: 0
    }, 
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 5, 
  }
})