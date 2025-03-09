import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";

import { useFonts } from 'expo-font';

export default function RootLayout() {
  //load Fonts for global use
  const [fontsLoaded] = useFonts({
    "MadimiOne-Regular": require("../assets/fonts/MadimiOne-Regular.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded){
      console.log("Fonts Loaded");
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) return null;

  
  return <Stack screenOptions={{headerShown: false}}/>;
}
