import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";

export default function SettingsScreen() {
  StatusBar.setBarStyle("dark-content");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <View>
        <ScrollView horizontal={true}>
          <View style={styles.element}></View>
          <View style={styles.element}></View>
          <View style={styles.element}></View>
          <View style={styles.element}></View>
          <View style={styles.element}></View>
          <View style={styles.element}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  element: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height / 4,
    marginVertical: 40,
    marginHorizontal: Dimensions.get("window").width * 0.05,
    justifyContent: "space-around",
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
});
