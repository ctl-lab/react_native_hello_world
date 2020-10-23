import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Auth from "../authentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  const auth = new Auth({ host: "http://localhost:3000/api/v1" });

  const logInHandler = async () => {
    try {
      let response = await auth.signIn(email, password);
      setMessage(response.data.uid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        editable
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={() => logInHandler()} title="Log in" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
