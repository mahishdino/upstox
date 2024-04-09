import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackContainer from "./app/navigation/StackNavigation.tsx";

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackContainer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
