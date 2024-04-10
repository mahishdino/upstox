import {
  CurrentValueFunction,
  InvestmentValueFunction,
  StockData,
  TransformedStockData,
} from "./types";

export const currentValue: CurrentValueFunction = (ltp, quantity) => {
  return ltp * quantity;
};

export const investmentValue: InvestmentValueFunction = (
  averagePrice,
  quantity
) => {
  return averagePrice * quantity;
};

export const transformData = (data: StockData[]): any[] => {
  return data.map((item) => {
    const { ltp, avgPrice, quantity, ...rest } = item;
    const currentValueVal = currentValue(ltp, quantity);
    const investmentValueVal = investmentValue(avgPrice, quantity);
    const pl = currentValueVal - investmentValueVal;
    return {
      ltp,
      avgPrice,
      quantity,
      ...rest,
      currentValue: +currentValueVal.toFixed(2),
      investmentValue: +investmentValueVal.toFixed(2),
      pl: +pl.toFixed(2),
    };
  });
};

export const totalCurrentValue = (data: TransformedStockData[]) => {
  let totalCurrentValue = 0;
  data.forEach((item) => {
    totalCurrentValue += item.currentValue;
  });
  return totalCurrentValue.toFixed(2);
};

export const totalInvestmentValue = (data: TransformedStockData[]) => {
  let totalInvestmentValue = 0;
  data.forEach((item) => {
    totalInvestmentValue += item.investmentValue;
  });
  return totalInvestmentValue.toFixed(2);
};

export const totalProfileAndLoss = (
  totalCurrentValue: number,
  totalInvestmentValue: number
) => {
  let totalProfitAndLossValue = totalCurrentValue - totalInvestmentValue;
  return totalProfitAndLossValue.toFixed(2);
};

export const todaysPNL = (data: TransformedStockData[]) => {
  let totalPNL = 0;

  data.forEach((item) => {
    const pnl = (item.close - item.ltp) * item.quantity;
    totalPNL += pnl;
  });

  return totalPNL.toFixed(2);
};
