import { animationMenuRoutes } from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";
import { Href, Link } from "expo-router";

export default function ComponentsApp() {
  return (
    <ThemedView
      margin
    >
      {
        animationMenuRoutes.map((route, index) => (
          <Link href={route.name.split('/')[0] as Href} key={route.name}>{route.title}</Link>
        ))
      }
    </ThemedView>
  );
}
