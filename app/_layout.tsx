import React, { useEffect } from "react";
import { View } from "react-native";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "antd";

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


  return(
      <Tabs 
        screenOptions={{headerShown: false}}
        
      >
        {/* Home */}
        <Tabs.Screen
          name = "index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color}/>
            ),
          }}
        />
        {/* Tips */}
        <Tabs.Screen
          name = "tips"
          options={{
            title: "Tips",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="wallet" size={size} color={color}/>
            )
          }}
        />
      </Tabs>
  );
}
