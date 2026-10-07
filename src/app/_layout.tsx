


import { Image } from "expo-image";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokémons",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image 
        source={require("../../assets/icons/pokemon.png")} 
        style={{ width: size, height: size }} 
      />
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          title: "Items",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image 
        source={require("../../assets/icons/items.png")} 
        style={{ width: size, height: size }} 
      />
          ),
        }}
      />
      <Tabs.Screen
        name="pokemon"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}


