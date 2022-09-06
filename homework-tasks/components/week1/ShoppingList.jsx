import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function ShoppingList() {
  const [input, setInput] = React.useState("");
  const [listData, setListData] = React.useState([]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(input) => setInput(input)}
        value={input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setListData([{ key: input }, ...listData]);
          }}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setListData([]);
          }}
        >
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Text>Shopping List</Text>
      <FlatList
        style={styles.list}
        data={listData}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
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
