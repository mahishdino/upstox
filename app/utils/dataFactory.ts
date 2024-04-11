import { DataItem } from "./types.ts";
import { appTexts } from "../constant/constant.ts";

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
    { label: appTexts.currentValue, value: currentValue },
    { label: appTexts.totalInvestment, value: totalInvestment },
    { label: appTexts.todaysProfitAndLoss, value: todaysProfitAndLoss },
    { label: appTexts.profitAndLoss, value: totalProfitAndLoss },
  ];
};
