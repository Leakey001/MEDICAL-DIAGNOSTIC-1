import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';
import { formatCurrency } from '@/utils/formatters';

interface ChartData {
  timestamp: number;
  price: number;
}

interface PriceChartProps {
  data: ChartData[];
}

export const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp) => format(timestamp, 'MMM d')}
        />
        <YAxis
          tickFormatter={(value) => formatCurrency(value)}
        />
        <Tooltip
          labelFormatter={(timestamp) => format(timestamp, 'MMM d, yyyy HH:mm')}
          formatter={(value: number) => [formatCurrency(value), 'Price']}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          dot={false}
          animationDuration={300}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};