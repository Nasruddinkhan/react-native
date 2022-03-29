import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const onCloseModalHandler  = () => {
    setModalIsVisible(false);
  }
  const addGoalOnList = (enteredText) => {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };
  const onPressToShowModal = () => {
    setModalIsVisible(true);
  };
  const deleteItemHandler = (id) => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" color="#5e0acc" onPress={onPressToShowModal} />
      <GoalInput
        visible={modalIsVisible}
        addGoal={addGoalOnList}
        addClosePopUp={onCloseModalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteItemHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, idx) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "#0ACC82",
  },

  goalContainer: {
    flex: 5,
  },
});
