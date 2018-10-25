import { createStackNavigator } from "react-navigation";
import MainScreen from "../screen/MainScreen";
import DeviceInfo from "../screen/DeviceInfo";

const Root = createStackNavigator(
  {
    DeviceInfo: DeviceInfo,
    MainScreen: MainScreen
  },
  { initialRouteName: "MainScreen" }
);

export default Root;
