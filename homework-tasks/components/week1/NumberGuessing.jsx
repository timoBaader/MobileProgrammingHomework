import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Calculator() {
  const [randomNumber, setRandomNumber] = React.useState("");
  const [guess, setGuess] = React.useState("");
  const [amountOfGuesses, setAmountOfGuesses] = React.useState("");
  const [result, setResult] = React.useState("Guess a number between 1-100");

  useEffect(() => {
    generateRandomNumber();
    setAmountOfGuesses(1);
  }, []);

  function generateRandomNumber() {
    var random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  }

  function compareNumbers() {
    var aa = amountOfGuesses;
    setAmountOfGuesses(aa + 1);

    console.log(randomNumber);
    if (guess === randomNumber) {
      setResult("Correct!");
      Alert.alert(`you guessed the number in ${amountOfGuesses} guesses`);
    } else if (guess > randomNumber) {
      setResult("Number was too big");
    } else {
      setResult("Number was too small");
    }
    console.log(amountOfGuesses);
  }

  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(input) => setGuess(parseInt(input))}
        value={guess}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => compareNumbers()}
        >
          <Text style={styles.buttonText}>Guess</Text>
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
    width: 60,
    height: 40,
    margin: 5,
  },
  buttonText: {
    color: "white",
  },
});
