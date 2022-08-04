import ProfileScreen from "../screens/ProfileScreen";
import ReferFriendsScreen from "../screens/ReferFriendsScreen";
import SavedItemsScreen from "../screens/SavedItemsScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default [
  {
    name: "Обслуживание авто",
    component: ProfileScreen,
  },
  {
    name: "Запись на услуги",
    component: SettingsScreen,
  },
  {
    name: "Профиль",
    component: SavedItemsScreen,
  },
];
