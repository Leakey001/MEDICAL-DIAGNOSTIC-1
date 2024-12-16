import React from 'react';
import { VitalSigns } from '@/types/medical';
import { formatVitals } from '@/utils/formatters';

interface VitalsDisplayProps {
  vitals: VitalSigns;
}

export const VitalsDisplay: React.FC<VitalsDisplayProps> = ({ vitals }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-gray-500 text-sm">Temperature</h3>
        <p className="text-2xl font-bold">{formatVitals.temperature(vitals.temperature)}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-gray-500 text-sm">Heart Rate</h3>
        <p className="text-2xl font-bold">{formatVitals.heartRate(vitals.heartRate)}</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-gray-500 text-sm">Blood Pressure</h3>
        <p className="text-2xl font-bold">
          {formatVitals.bloodPressure(vitals.bloodPressure)}
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-gray-500 text-sm">Respiratory Rate</h3>
        <p className="text-2xl font-bold">
          {formatVitals.respiratoryRate(vitals.respiratoryRate)}
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-gray-500 text-sm">Oxygen Saturation</h3>
        <p className="text-2xl font-bold">
          {formatVitals.oxygenSaturation(vitals.oxygenSaturation)}
        </p>
      </div>
    </div>
  );
};