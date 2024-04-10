import { StyleSheet, Text, View } from "react-native";
import { typography } from "../theme/typography.ts";
import { rs } from "../theme/responsiveScreenSize.ts";
import { Colors } from "../theme/colors.ts";

interface StockItemProps {
  title: string;
  quantity: number;
  ltp: number;
  pl: number;
}

const StockItem = (props: StockItemProps) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.quantity}>{props.quantity}</Text>
      </View>
      <View>
        <Text style={styles.prefix}>
          LTP:<Text style={styles.suffix}> ₹{props.ltp}</Text>
        </Text>
        <Text style={styles.prefix}>
          P/L:<Text style={styles.suffix}> ₹{props.pl}</Text>
        </Text>
      </View>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.mainBackground,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: rs(12),
    borderBottomWidth: 0.8,
  },
  quantity: {
    fontFamily: typography.Main,
    color: Colors.black,
  },
  title: {
    fontFamily: typography.MainBold,
    color: Colors.black,
    marginBottom: rs(5),
  },
  prefix: {
    fontFamily: typography.Main,
    color: Colors.black,
    marginBottom: rs(5),
  },
  suffix: {
    fontFamily: typography.MainBold,
    color: Colors.black,
  },
});
