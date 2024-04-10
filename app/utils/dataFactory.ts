import { DataItem } from "./types.ts";

export const createTotalInvestmentAndProfitData = (values: {
  currentValue: number;
  totalInvestment: number;
  todaysProfitAndLoss: number;
  totalProfitAndLoss: number;
}): DataItem[] => {
  const {
    currentValue,
    totalInvestment,
    todaysProfitAndLoss,
    totalProfitAndLoss,
  } = values;
  return [
    { label: "Current Value", value: currentValue },
    { label: "Total Investment", value: totalInvestment },
    { label: "Todays Profit And Loss", value: todaysProfitAndLoss },
    { label: "Profit & Loss", value: totalProfitAndLoss },
  ];
};
