import { createStackNavigator } from "react-navigation";
import MainScreen from '../screen/MainScreen'

const Root = createStackNavigator(
    {
        MainScreen: {
            screen: MainScreen
        }
    },
    { initialRouteName: "MainScreen" }
);

export default Root;
