import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header.tsx";
import { appTexts, Images } from "../constant/constant.ts";
import StockItem from "../components/StockItem.tsx";
import { DataItem, TransformedStockData } from "../utils/types.ts";
import PrefixAndSuffix from "../components/PrefixAndSuffix.tsx";
import { rs } from "../theme/responsiveScreenSize.ts";
import { Colors } from "../theme/colors.ts";
import { useStockData } from "../customHooks/useStockData.ts";
import { createTotalInvestmentAndProfitData } from "../utils/dataFactory.ts";
import { typography } from "../theme/typography.ts";

const Home = () => {
  const [collapse, setCollapse] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const {
    stocks,
    currentValue,
    totalInvestment,
    todaysProfitAndLoss,
    totalProfitAndLoss,
    isLoading,
    error,
    refreshData,
  } = useStockData();
  const data = createTotalInvestmentAndProfitData({
    currentValue,
    totalInvestment,
    todaysProfitAndLoss,
    totalProfitAndLoss,
  });
  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    refreshData().then(() => setIsRefreshing(false));
  }, [refreshData]);

  const renderItem = ({ item }: { item: DataItem }) => (
    <PrefixAndSuffix prefixValue={item.label} suffixValue={item.value} />
  );

  const renderStockItem = ({ item }: { item: TransformedStockData }) => (
    <StockItem
      title={item.symbol}
      quantity={item.quantity}
      ltp={item.ltp}
      pl={item.pl}
    />
  );

  if (isLoading)
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size={"large"} color={Colors.appBackground} />
      </View>
    );
  if (error)
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{appTexts.errorMessage}</Text>
      </View>
    );

  return (
    <View style={styles.main}>
      <Header title={appTexts.headerTitle} />
      <FlatList
        data={stocks}
        renderItem={renderStockItem}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setCollapse((prev) => !prev);
        }}
        style={styles.collapseButton}
      >
        <Image
          style={{
            width: collapse ? rs(20) : rs(17),
            height: collapse ? rs(20) : rs(17),
          }}
          resizeMode={"contain"}
          source={collapse ? Images.downArrow : Images.upArrow}
        />
      </TouchableOpacity>
      {collapse ? (
        <View style={styles.collapseViewOne}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <View style={styles.collapseViewTwo}>
          <PrefixAndSuffix
            prefixValue={data[data.length - 1].label}
            suffixValue={data[data.length - 1].value}
          />
        </View>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "grey",
  },
  collapseButton: {
    padding: 10,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  collapseViewOne: { flex: 1, backgroundColor: Colors.white },
  collapseViewTwo: {
    backgroundColor: "white",
    width: "100%",
    height: rs(50),
  },
  errorContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  errorMessage: {
    fontFamily: typography.MainBold,
    fontSize: rs(20),
  },
});
