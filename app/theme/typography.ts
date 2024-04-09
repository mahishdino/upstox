import { Platform } from "react-native";

export const typography = {
  primary: Platform.select({
    ios: "Roboto-Regular",
    android: "Roboto-Regular",
  }),

  Main: Platform.select({
    ios: "Roboto-Regular",
    android: "Roboto-Regular",
  }),

  MainBold: Platform.select({
    ios: "Roboto-Bold",
    android: "Roboto-Bold",
  }),
};
