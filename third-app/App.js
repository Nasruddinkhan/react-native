import { useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {

  return (
    <View>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
 
});
