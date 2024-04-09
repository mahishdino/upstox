import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../screens/Home.tsx";

const Stack = createStackNavigator();

const StackContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName={"getStarted"}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackContainer;
