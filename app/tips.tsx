import { SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native'
import React, { Component, useEffect, useState } from "react";


//import {tips} from "./index.tsx"

const Tips = () => {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flexGrow: 1 }}>
    
            {/* Heading */}
            <View style={styles.container}>
              <Text style={styles.title}>Tipper</Text>
              <Text style={styles.smallText}>{greeting}! 👋</Text>
            </View>
          </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
  container: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex", // Ensure it's visible on Web
  },
  smallText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  },
})

export default Tips