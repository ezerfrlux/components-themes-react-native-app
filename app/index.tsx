import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import { View } from "react-native";

export default function ComponentsApp() {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0 ? true : false}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}
      <View className="my-5"></View>
      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0 ? true : false}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}
      <View className="my-5"></View>

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0 ? true : false}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
}
