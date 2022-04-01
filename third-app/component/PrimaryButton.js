import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('PRESS HADLER');
  }
  return (
    <Pressable
      onPress={pressHandler}
      android_ripple={{ color: "#640233" }}
      rippleColor="#640233"
    >
      <View style={styles.btnContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};
export default PrimaryButton;


const styles = StyleSheet.create({
  btnContainer: {
    
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#72063c",
    elevation: 2,
    margin: 2
    
  },
  buttonText : {
    color: 'white',
    textAlign: 'center'
  }

});

