import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";

import Blocks from "../constants/Blocks";

export default function SettingsScreen() {
  StatusBar.setBarStyle("dark-content");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <ScrollView horizontal={true} style={styles.scroll}>
        {Blocks.map((block, i) => (
          <View style={styles.element} key={i}>
            <Text>{block.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f0",
  },
  scroll: {
    backgroundColor: "#00f",
  },
  element: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height / 4,
    marginHorizontal: (Dimensions.get("window").width * 0.1) / 2,
    marginVertical: Dimensions.get("window").height / 20,
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    paddingVertical: 20,
  },
});
