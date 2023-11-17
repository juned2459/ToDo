import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Screens from "../Screens";
import navigationStrings from "./navigationStrings";


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={navigationStrings.DATA} component={Screens.Data} options={{headerShown:false}}/>
        <Stack.Screen name={navigationStrings.ADD_DATA} component={Screens.AddData} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
