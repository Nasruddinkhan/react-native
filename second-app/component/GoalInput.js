import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const onChangeGoalHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoal(enteredGoalText);
    setEnteredGoalText("");
    props.addClosePopUp();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputimage}
          source={require("../assets/img/goals.jpg")}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="My Course goal!"
          onChangeText={onChangeGoalHandler}
        />
        <View style={styles.mybuttonContainer}>
          <View style={styles.mybuttonView}>
            <Button title="Add Goal" color="#3C24DC" onPress={addGoalHandler} />
          </View>
          <View style={styles.mybuttonView}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={props.addClosePopUp}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    backgroundColor: "#0ACC82",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    width: "100%",
    padding: 16,
    color: "#302E2E",
    borderRadius: 5,
  },
  mybuttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  mybuttonView: {
    width: "30%",
    marginHorizontal: 8,
  },
  inputimage: {
    width: 100,
    height: 100,
    margin: 20,
    borderRadius: 50,
  },
});
