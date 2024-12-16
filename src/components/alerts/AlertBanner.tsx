import React from 'react';

interface AlertBannerProps {
  message: string;
  type: 'warning' | 'critical' | 'info';
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ message, type }) => {
  const bgColor = {
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-700',
    critical: 'bg-red-50 border-red-400 text-red-700',
    info: 'bg-blue-50 border-blue-400 text-blue-700'
  }[type];

  return (
    <div className={`p-4 border-l-4 ${bgColor}`} role="alert">
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};