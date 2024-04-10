export interface CurrentValueFunction {
  (ltp: number, quantity: number): number;
}

export interface InvestmentValueFunction {
  (averagePrice: number, quantity: number): number;
}

export interface DataItem {
  label: string;
  value: number | string;
}

export interface StockData {
  avgPrice: number;
  close: number;
  ltp: number;
  quantity: number;
  symbol: string;
}

export interface TransformedStockData extends StockData {
  currentValue: number;
  investmentValue: number;
  pl: number;
}
