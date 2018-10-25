import { createStackNavigator } from "react-navigation";
import MainScreen from "../screen/MainScreen";
import DeviceInfo from "../screen/DeviceInfo";
import Scanner from "../screen/Scanner";

const Root = createStackNavigator(
  {
    DeviceInfo: DeviceInfo,
    MainScreen: MainScreen,
    Scanner: Scanner
  },
  { initialRouteName: "Scanner" }
);

export default Root;
