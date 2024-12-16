export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
}

export interface MarketData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface TechnicalIndicators {
  rsi: number;
  macd: number;
  volume: number;
}

export interface PredictionData {
  timestamp: number;
  predicted_price: number;
  confidence: number;
  indicators: TechnicalIndicators;
}