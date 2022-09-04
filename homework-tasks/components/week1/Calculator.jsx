import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Calculator() {
  const [number1, setNumber1] = React.useState("");
  const [number2, setNumber2] = React.useState("");
  const [result, setResult] = React.useState("");

  const buttonPressed = () => {
    Alert.alert("You typed: ");
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(input) => setNumber1(parseInt(input))}
        value={number1}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(input) => setNumber2(parseInt(input))}
        value={number2}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setResult(number1 + number2);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setResult(number1 - number2);
          }}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonContainer: {
    margin: 10,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    margin: 10,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00bfff",
    width: 40,
    height: 40,
    margin: 5,
  },
  buttonText: {
    color: "white",
  },
});
