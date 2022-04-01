import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../component/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <TextInput style={styles.numberInput} 
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    textAlign: "center",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#440324",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    alignItems: "center",

    textAlign: "center",
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
});