import { SafeAreaView, View, StyleSheet, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

//import {tips} from "./index.tsx"

const Tips = () => {

  return (
    <SafeAreaView>
      <Text style={styles.title}>Deine letzen Tips</Text>
      <View style={styles.line}/>

      {/* Table */}
      <View>
        <ScrollView>
        </ScrollView>
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
  line : {
    marginTop: 30,
    marginHorizontal: 30,
    width: 400,
    height: 2,
    backgroundColor: "black",

  },
})

export default Tips