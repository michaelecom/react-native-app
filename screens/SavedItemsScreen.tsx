import { StyleSheet, Text, View } from "react-native";

export default function SavedItemsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Items Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
});
