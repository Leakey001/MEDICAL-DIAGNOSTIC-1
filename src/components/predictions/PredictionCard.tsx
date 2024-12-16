import React from 'react';
import { PredictionData } from '@/types/crypto';
import { formatCurrency, formatPercentage } from '@/utils/formatters';
import { PredictionIndicator } from './PredictionIndicator';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';

interface PredictionCardProps {
  prediction: PredictionData;
  isLoading?: boolean;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ prediction, isLoading }) => {
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Price Prediction</h3>
        <div className="text-sm text-gray-500">
          {new Date(prediction.timestamp).toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <PredictionIndicator
          label="Predicted Price"
          value={prediction.predicted_price}
          formatter={formatCurrency}
        />
        <PredictionIndicator
          label="Confidence"
          value={prediction.confidence}
          formatter={formatPercentage}
        />
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-500">Technical Indicators</h4>
        <div className="grid grid-cols-3 gap-4">
          <PredictionIndicator
            label="RSI"
            value={prediction.indicators.rsi}
            formatter={(v) => v.toFixed(2)}
          />
          <PredictionIndicator
            label="MACD"
            value={prediction.indicators.macd}
            formatter={(v) => v.toFixed(3)}
          />
          <PredictionIndicator
            label="Volume"
            value={prediction.indicators.volume}
            formatter={formatCurrency}
          />
        </div>
      </div>
    </div>
  );
};