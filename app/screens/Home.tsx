import React from "react";
import { Text, View } from "react-native";
import { apiRequest } from "../api/api.ts";
import { typography } from "../theme/typography.ts";

const Home = () => {
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async (): Promise<void> => {
    try {
      const data = await apiRequest({
        method: "GET",
        url: "/bde7230e-bc91-43bc-901d-c79d008bddc8",
      });
      console.log(data);
    } catch (error) {
      console.error("Fetching data failed", error);
    }
  };
  return (
    <View>
      <Text style={{ fontFamily: typography.MainBold }}>Home</Text>
    </View>
  );
};
export default Home;
