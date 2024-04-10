import { StyleSheet, Text, View } from "react-native";
import { typography } from "../theme/typography.ts";
import { rs } from "../theme/responsiveScreenSize.ts";
import { Colors } from "../theme/colors.ts";

interface PrefixAndSuffixProps {
  prefixValue: string;
  suffixValue: number | string;
}

const PrefixAndSuffix = (props: PrefixAndSuffixProps) => {
  return (
    <View style={styles.main}>
      <Text style={styles.prefixText}>{props.prefixValue}</Text>
      <Text style={styles.suffixText}> ₹{props.suffixValue}</Text>
    </View>
  );
};

export default PrefixAndSuffix;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: rs(10),
  },
  prefixText: {
    fontFamily: typography.MainBold,
    fontSize: rs(13),
    color: Colors.black,
  },
  suffixText: {
    fontFamily: typography.Main,
    color: Colors.black,
    fontSize: rs(13),
  },
});
