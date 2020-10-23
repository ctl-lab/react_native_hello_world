import React from "react";
import MainScreen from "./src/components/MainScreen";
import SecondScreen from "./src/components/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main Page" component={MainScreen} />
        <Stack.Screen name="Second Page" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
