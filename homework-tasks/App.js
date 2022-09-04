import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./components/week1/Calculator";
import NumberGuessing from "./components/week1/NumberGuessing";
import ShoppingList from "./components/week1/ShoppingList";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
