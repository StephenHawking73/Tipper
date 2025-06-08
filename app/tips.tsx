import { SafeAreaView, View, StyleSheet, Text, FlatList } from 'react-native'
import React, { Component, useEffect, useState } from "react";
import { useTipHistory } from "./TipHistoryContext";


const Tips = () => {
  const { tipHistory } = useTipHistory();
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
      <FlatList
        data={tipHistory}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.container}>
            <Text style={styles.title}>Tipper</Text>
            <Text style={styles.smallText}>{greeting}! 👋</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.border}>
            <Text>💵 Tip: ${item.amount}</Text>
            <Text>📅 Date: {new Date(item.date).toLocaleString("de-DE").replace(",","")}</Text>
            <Text>📝 Note: { (item.description != "") ? item.description : "/"}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
  container: {
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex", 
  },
  smallText: {
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  },
  normalText: {
    alignSelf: "flex-start",
    paddingLeft: 10,
    fontFamily: "MadimiOne-Regular",
    fontSize: 30,
  },
  border: {
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: "center", // Center and shrink to content
    marginVertical: 10,  // Optional: space between items
    backgroundColor: "#fff", // Optional: for better visibility
  },
})

export default Tips