import axios from 'axios';
import { PredictionData } from '@/types/crypto';

// Note: This is a mock API service since we don't have a real prediction API
export const predictionsApi = {
  getPrediction: async (coinId: string, timeframe: string): Promise<PredictionData> => {
    // Simulated API response
    return {
      timestamp: Date.now(),
      predicted_price: Math.random() * 1000,
      confidence: Math.random() * 100,
      indicators: {
        rsi: Math.random() * 100,
        macd: Math.random() * 2 - 1,
        volume: Math.random() * 1000000
      }
    };
  }
};