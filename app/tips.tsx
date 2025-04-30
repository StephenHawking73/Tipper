import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import React from 'react'

//import {tips} from "./index.tsx"

const Tips = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Deine letzen Tips</Text>
      <View style={styles.table}>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 40,
    fontFamily: "MadimiOne-Regular",
  },
  table: {
    
  },
})

export default Tips