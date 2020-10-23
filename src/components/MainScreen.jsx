import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Button, Text, View } from "react-native";

const MainScreen = (props) => {
  const greeting = useSelector((state) => state.mainPageGreeting);
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        onPress={() =>
          props.navigation.navigate("Second Page", {
            customParameter:
              "This is a hello from a parameter passed in MainScreen to SecondScreen",
          })
        }
        title="Go to Second Page"
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
