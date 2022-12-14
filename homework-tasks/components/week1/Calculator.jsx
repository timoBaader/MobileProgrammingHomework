import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

export default function Calculator() {
  const [number1, setNumber1] = React.useState("");
  const [number2, setNumber2] = React.useState("");
  const [result, setResult] = React.useState("");
  const [listData, setListData] = React.useState([]);

  function handleButtonClick(operation) {
    var resultTemp;
    if (operation === "+") {
      resultTemp = number1 + number2;
    } else {
      resultTemp = number1 - number2;
    }
    setResult(result);
    setListData([
      {
        key: `${number1} ${operation} ${number2} = ${resultTemp}`,
      },
      ...listData,
    ]);
  }

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
            handleButtonClick("+");
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButtonClick("-");
          }}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <Text>History</Text>
      <FlatList
        style={styles.list}
        data={listData}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      ></FlatList>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    color: "black",
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
