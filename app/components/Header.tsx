import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../theme/colors.ts";
import { rp, rs } from "../theme/responsiveScreenSize.ts";
import { typography } from "../theme/typography.ts";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    width: rp(100),
    backgroundColor: Colors.appBackground,
    padding: rs(10),
  },
  title: {
    fontSize: rs(14),
    color: Colors.white,
    fontFamily: typography.MainBold,
  },
});
