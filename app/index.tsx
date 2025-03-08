import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider, {SliderProps} from '@react-native-community/slider';
import React from "react";

export default function Index() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Tipper</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginTop: 75,
    fontFamily: 'Madimi One',
    fontSize: 64,
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset:{
      height:7, 
      width: 0
    },
    textShadowRadius: 4
  }
})