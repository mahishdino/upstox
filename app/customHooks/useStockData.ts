import React from "react";
import { apiRequest } from "../api/api.ts";
import {
  todaysPNL,
  totalCurrentValue,
  totalInvestmentValue,
  totalProfileAndLoss,
  transformData,
} from "../utils/utils.ts";
import { TransformedStockData } from "../utils/types.ts";
import { ApiEndpoints } from "../api/apiEndpoints.ts";

interface StockDataState {
  stocks: TransformedStockData[];
  currentValue: number;
  totalInvestment: number;
  todaysProfitAndLoss: number;
  totalProfitAndLoss: number;
  isLoading: boolean;
  error: any;
}

export const useStockData = () => {
  const [data, setData] = React.useState<StockDataState>({
    stocks: [],
    currentValue: 0,
    totalInvestment: 0,
    todaysProfitAndLoss: 0,
    totalProfitAndLoss: 0,
    isLoading: true,
    error: null,
  });

  const fetchData = async () => {
    try {
      const response = await apiRequest({
        method: "GET",
        url: ApiEndpoints.getAllStocks,
      });
      const { userHolding } = response.data;
      const transformedData = transformData(userHolding);
      setData((prev) => {
        const newCurrentValue = Number(totalCurrentValue(transformedData));
        const newTotalInvestment = Number(
          totalInvestmentValue(transformedData)
        );
        const newTodaysProfitAndLoss = Number(todaysPNL(transformedData));

        const newTotalProfitAndLoss = Number(
          totalProfileAndLoss(newCurrentValue, newTotalInvestment)
        );
        return {
          ...prev,
          stocks: transformedData,
          currentValue: newCurrentValue,
          totalInvestment: newTotalInvestment,
          todaysProfitAndLoss: newTodaysProfitAndLoss,
          totalProfitAndLoss: newTotalProfitAndLoss,
          isLoading: false,
        };
      });
    } catch (error) {
      setData((prev) => ({ ...prev, error, isLoading: false }));
      console.error("Fetching data failed", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { ...data, refreshData: fetchData };
};
