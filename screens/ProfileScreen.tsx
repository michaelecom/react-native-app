import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  let [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button
        title="click"
        onPress={() => {
          setValue(!value);
        }}
      />
      {value && <Text style={styles.text}>toggle</Text>}
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
