import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider, {SliderProps} from '@react-native-community/slider';
import React, { useEffect, useState } from "react";

export default function Index() {
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

  return (
    <SafeAreaView>
      {/* Header */}
      <Text style={styles.title}>Tipper</Text>
      <Text style={styles.greeting}>{greeting}! 👋</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
})