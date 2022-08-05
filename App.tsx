// see https://www.youtube.com/watch?v=PkgWZUpQ6h8
// see https://stackoverflow.com/questions/65573511/custom-drawer-in-react-navigation
// see https://reactnative.dev/docs/navigation
// see https://dev.to/justussoh/using-github-actions-to-seamlessly-deploy-expo-applications-part-1-3jfb
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
} from "react-native";

import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Screens from "./constants/Screens";

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 40,
          marginTop: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f00",
        }}
        onPress={() => {
          Alert.alert("work");
        }}
      >
        <Text>Go somewhere</Text>
      </TouchableOpacity>
      {Screens.map((screen, i) => (
        <DrawerItem
          key={i}
          label={screen.name}
          onPress={() => {
            navigation.navigate(screen.name);
          }}
        />
      ))}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Запись на услуги"
        screenOptions={{
          drawerStyle: {
            width: Dimensions.get("window").width * 0.75,
          },
          drawerPosition: "right",
        }}
      >
        {Screens.map((screen, i) => (
          <Drawer.Screen
            key={i}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
