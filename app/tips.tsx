import { SafeAreaView, View, StyleSheet, Text, FlatList, Pressable } from 'react-native'
import React, { Component, useEffect, useState } from "react";
import { useTipHistory } from "./TipHistoryContext";


const Tips = () => {
  const { tipHistory, removeTip } = useTipHistory();
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
      {/*Heading*/}
      <View style={styles.container}>
        <Text style={styles.title}>Tipper</Text>
        <Text style={styles.smallText}>{greeting}! 👋</Text>
      </View>

      {/*List*/}
      <FlatList
        data={tipHistory}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.border}>
            <Text>💵 Tip: €{item.tip} (€{item.total})</Text>
            <Text>📅 Zeit: {new Date(item.date).toLocaleString("de-DE").replace(",","")}</Text>
            <Text>📝 Beschreibung: { (item.description !== "") ? item.description : "/"}</Text>
            {/*Delete Button*/}
            <View>
              <Pressable
                style={({ pressed }: { pressed: boolean }) => [
                styles.deleteButton,
                pressed && { opacity: 0.5, shadowOpacity: 0.8 }
                ]}
                onPress={() => removeTip(item)}
                >
                <Text style={styles.deleteText}>Delete</Text>
              </Pressable>
      </View>
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
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "#fff",
    maxWidth: "90%", // Add this line
  },
  deleteButton: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    flex: 0,
    width: "50%",
    backgroundColor: "red",
    borderRadius: 7,
  },
  deleteText: {
    alignSelf: "center",
    textAlignVertical: "center",
    fontFamily: "MadimiOne-Regular",
    fontSize: 20,
  }
})

export default Tips