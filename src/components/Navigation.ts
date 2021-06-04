import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TItem } from "../../types";

export interface StackNativationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface TabNavigationProps<
  RouteName extends keyof AppRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AppRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
  EstablishmentDetails: {item: TItem};
};

export type AuthenticationRoutes = {
  Login: undefined;
};

export type HomeRoutes = {
  Home: undefined;
}