import react, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

import { auth } from "./services/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginAction = async() => {
    console.log(email);
    console.log(password);
    await signInWithEmailAndPassword(auth,email,password)
    .then(res => {
        //console.log(res);
    })
    .catch(err => {
        Alert.alert(err.message)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
      value={email}
      onChangeText={(e) => setEmail(e)}
      placeholder="Email" style={styles.input} />

      <TextInput
      value={password}
      onChangeText={(e) => setPassword(e)}
      placeholder="Password" style={styles.input} />

      <Button onPress={loginAction} title="Log In" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom:12
  },
  container: {
    backgroundColor: "#00cc99",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "200",
  },
});

export default Login;
