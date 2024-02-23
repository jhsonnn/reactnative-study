import { createNativeStackNavigator } from "@react-navigation/native/stack";
import React from "react";
import BasketScreen from "./screens/BasketScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Naviagtor initialRouterName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen
          name='Basket'
          component={BasketScreen}
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='PreparingOrder'
          component={PreparingOrderScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        <Stack.Screen name='Delivery' component={DeliveryScreen} />
      </Stack.Naviagtor>
    </NavigationContainer>
  );
};

export default Navigation;
